var ChangedNodes = new Array();// 定义一个数组
var ITEMCOUNT = 1000;
for (i = 0; i < ITEMCOUNT; i++) {
	ChangedNodes[i] = new Array('0', 'false');
};
var NodeID = "0";

Ext.define('app.controller.config.privilegemanage.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.config.privilegemanage.List'],
	stores : ['app.store.config.privilegemanage.Store'],
	models : ['app.model.config.privilegemanage.Model'],
	init : function() {
		// 初始化ChangedNodes数组
		for (i = 0; i < ITEMCOUNT; i++) {
			ChangedNodes[i][0] = '0';
			ChangedNodes[i][1] = 'false';
		}
		// 以下这行防止要点击2次左边的菜单栏才显示右边的表格
		newTab("privilegemanagelist", "privilegemanagelist", "用户管理>权限管理",
				"权限管理");
		// 给store添加监听事件,捕获登陆session过期的异常信息
		Ext.data.StoreManager.lookup("app.store.config.privilegemanage.Store").proxy
				.addListener("exception", function excep(proxy, response,
						operation) {
					if (Ext.JSON.decode(response.responseText).message) {
						Ext.Msg.alert("系统提醒", Ext.JSON
										.decode(response.responseText).message);
					}
				});
		// 给store添加监听事件,捕获登陆session过期的异常信息
		Ext.data.StoreManager
				.lookup("app.store.config.privilegemanage.PrivilegeTreeStore").proxy
				.addListener("exception", function excep(proxy, response,
						operation) {
					if (Ext.JSON.decode(response.responseText).message) {
						Ext.Msg.alert("系统提醒", Ext.JSON
										.decode(response.responseText).message);
					}
				});
		// 给store添加监听事件,在加载数据的时候带参数roleId到后台
		Ext.data.StoreManager
				.lookup("app.store.config.privilegemanage.PrivilegeTreeStore")
				.addListener("beforeload",
						function bload(store, operation, eOpts) {
							Ext.apply(store.proxy.extraParams, {
										roleId : roleId
									});
						});
		var tree = null;
		this.control({
			'privilegemanageleftlist' : {
				// render : this.render,
				itemclick : this.itemClick,
				itemdblclick : this.dbClick
			},
			'privilegemanagelist button[action=addrole]' : {
				// 打开添加角色窗口
				click : this.add
			},
			'addrolewindow button[action=ok]' : {
				// 后台请求添加角色
				click : this.addrole
			},
			'addrolewindow button[action=close]' : {
				// 关闭添加角色窗口
				click : this.closeAddRoleWindow
			},
			'privilegemanagelist button[action=addprivilegefunctiongroup]' : {
				click : this.addprivilegefunctiongroup
			},
			'privilegemanagelist button[action=deleterole]' : {
				// 后台请求删除角色
				click : this.deleterole
			},
			'privilegemanagelist button[action=deleteprivilegefunctiongroup]' : {
				click : this.deleteprivilegefunctiongroup
			},
			'privilegetreelist' : {
				// 选择状态改变
				checkchange : this.checkChange
			},
			'privilegetreelist button[action=save]' : {
				// 更新权限请求
				click : this.updatePrivilege
			}
		});
	},

	/**
	 * 选择状态改变
	 * 
	 * @param {}
	 *            aNode
	 * @param {}
	 *            isChecked
	 */
	checkChange : function(aNode, isChecked) {
		setChildChecked(aNode, isChecked);
		if (aNode.data.leaf) {
			setParentChecked(aNode, isChecked);
		}
	},
	/**
	 * 向后台请求更新权限操作
	 */
	updatePrivilege : function() {
		var Nodes = "";
		var n = 0;
		for (i = 0; i < ChangedNodes.length; i++) {
			if (ChangedNodes[i][0] > 0) {
				if (Nodes.length > 0)
					Nodes += ",";
				Nodes += "{\"id\":\"" + ChangedNodes[i][0].toString()
						+ "\",\"checked\":\"" + ChangedNodes[i][1].toString()
						+ "\"}";
				n++;
			}
		}
		// if (Nodes.length > 0)
		Nodes = "{\"Nodes\": [" + Nodes + "]}";
		Ext.Ajax.request({
					url : 'privilege/update',
					success : function(response, options) {
						// var value = Ext.JSON.decode(response.responseText);
						var value = response.responseText;
						// alert(value);
						if (value == 'SUCCESS')
							Ext.MessageBox.alert("系统提醒", "保存成功,重新登陆后,即可生效!");
						else if (value == 'ERROR')
							Ext.MessageBox.alert("系统提醒", "保存失败!");
						else
							Ext.MessageBox.alert("系统提醒", "返回未知数据!");
						Ext.ComponentQuery.query("privilegetreelist")[0]
								.getStore().reload();
						Init();
					},
					failure : function() {
						Ext.MessageBox.alert("系统提醒", "数据无法提交!");
					},
					params : {
						roleId : roleId,
						nodes : Nodes
					}
				});

	},
	/**
	 * 打开添加角色的窗口
	 */
	add : function() {
		if (Ext.ComponentQuery.query("addroleform")[0]) {
			Ext.ComponentQuery.query("addroleform")[0].getForm().reset();
		}
		if (!Ext.ComponentQuery.query("addrolewindow")[0]) {
			Ext.create('app.view.config.privilegemanage.AddRoleWindow', {})
					.show();
		} else {
			Ext.ComponentQuery.query("addrolewindow")[0].show();
		}
	},
	/**
	 * 后台请求添加角色
	 */
	addrole : function() {
		Ext.ComponentQuery.query("addroleform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "role/add",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.message);
				var lefttree = Ext.ComponentQuery
						.query("privilegemanageleftlist")[0];
				if (temp.status) {
					var win = Ext.ComponentQuery.query("addrolewindow")[0];
					win.close();
					lefttree.getStore().load();
					return true;
				} else {
					return false;
				}
			},
			failure : function(form, response) { // 当success为true时执行的回调函数
				var temp = false;
				if (response.result) {
					temp = response.result;
				} else {
					temp = {
						'message' : '请确保填写所有必填信息'
					};
				}
				Ext.Msg.alert("系统提示", temp.message);
				return false;
			}
		});
	},
	addprivilegefunctiongroup : function() {
		alert("privilegemanagelist");
	},
	/**
	 * 后台请求删除角色
	 */
	deleterole : function() {
		var tree = Ext.ComponentQuery.query("privilegemanageleftlist")[0];
		var selectNode = tree.getSelectionModel().selected.items[0];
		if (selectNode.data.leaf) {
			// alert(selectNode.data.id)
			var id = selectNode.data.id;
			Ext.Msg.show({
						title : '删除确认?',
						msg : '确定要删除所选择的数据吗?删除后不可恢复!',
						buttons : Ext.Msg.OKCANCEL,
						icon : Ext.MessageBox.QUESTION,
						fn : function(bid, txt) {
							if (bid == 'ok') {
								Ext.Ajax.request({
											url : "role/delete?id=" + id,
											success : function(response) {
												var temp = Ext.JSON
														.decode(response.responseText);
												Ext.Msg.alert("系统提示",
														temp.message);
												if (temp.status) {
													tree.getStore().load();
												}
											}
										});
							}
						}
					});
		}
	},
	deleteprivilegefunctiongroup : function() {
		alert("deleteprivilegefunctiongroup")
	},
	// render : function(t, eOpts) {
	// Ext.data.StoreManager.lookup("app.store.config.privilegemanage.Store")
	// .load();
	// tree = t;
	// tree.getRootNode().collapseChildren();
	// var rootnode = tree.getRootNode();
	// tree.expandAll();// 再打开第一个，这样reload的目标永远在第一个
	// tree.getView().refresh();
	// },
	dbClick : function(tree, record, item, index, e, eOpts) {
		this.itemClick(tree, record, item, index, e, eOpts);
	},
	itemClick : function(tree, record, item, index, e, eOpts) {
		var selectNode = tree.getSelectionModel().selected.items[0];
		if (selectNode.data.leaf) {
			var rightPanel = Ext.ComponentQuery
					.query("privilegemanagerightlist")[0];// 右侧面板
			var id = selectNode.data.id;// 选择的角色相对应的id
			roleId = id;
			// alert(roleId)
			var pTree = Ext.ComponentQuery.query("privilegetreelist")[0];
			if (pTree)
				rightPanel.remove(pTree);
			var tree_privilege = Ext.create(
					"app.view.config.privilegemanage.PrivilegeTreeList", {});
			rightPanel.add(tree_privilege);
			// tree_privilege.getView().refresh();
			// if(tree_privilege.getRootNode().hasChildNodes()){
			// tree_privilege.removeAll();
			// }
			Ext.data.StoreManager
					.lookup("app.store.config.privilegemanage.PrivilegeTreeStore")
					.reload();
			Init();
			rightPanel.doLayout();
		}
	},
	/**
	 * 关闭添加角色窗口
	 */
	closeAddRoleWindow : function() {
		var win = Ext.ComponentQuery.query("addrolewindow")[0];
		win.close();

	}
});

function Init() {
	for (i = 0; i < ITEMCOUNT; i++) {
		ChangedNodes[i][0] = '0';
		ChangedNodes[i][1] = 'false';
	}
}

function setChildChecked(node, checked) {
	node.expand();
	node.set({
				checked : checked
			});
	changeNodesFunction(node.data.id, checked);
	if (node.hasChildNodes()) {
		node.eachChild(function(child) {
					setChildChecked(child, checked);
				});
	}
}
function setParentChecked(node, checked) {
	node.set({
				checked : checked
			});
	changeNodesFunction(node.data.id, checked);
	var parentNode = node.parentNode;
	if (parentNode != null) {
		var flag = false;
		parentNode.eachChild(function(child) {
					if (child.data.checked == true) {
						flag = true;
					}
				});
		if (checked == false) {
			if (!flag) {
				setParentChecked(parentNode, checked);
			}
		} else {
			if (flag) {
				setParentChecked(parentNode, checked);
			}
		}
	}
}

function changeNodesFunction(id, isChecked) {
	if (id == "root") {
		return;
	}
	var i = id % ITEMCOUNT; // 散列函数，使用ID得出下标
	while (ChangedNodes[i][0] != id && ChangedNodes[i][0] != 0 && i < ITEMCOUNT)
		// 冲突
		i++;
	if (ChangedNodes[i][0] == id || ChangedNodes[i][0] == 0) {
		ChangedNodes[i][0] = id;
		ChangedNodes[i][1] = isChecked;
		// alert("i="+i+",value="+ChangedNodes[i].toString());
	}
}
