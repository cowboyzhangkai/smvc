Ext.define('app.controller.config.usermanage.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.config.usermanage.List','app.view.config.usermanage.add.Add'],
	stores : ['app.store.config.usermanage.Store'],
	models : ['app.model.config.usermanage.Model'],
	init : function() {
		// 以下这行防止要点击2次左边的菜单栏才显示右边的表格
		newTab("usermanagelist", "usermanagelist", "用户管理>人员管理", "人员管理");
		// 给store添加监听事件,捕获登陆session过期的异常信息
		// 添加分页监听事件
		Ext.getCmp('userManagerPagingToolbarId').on("beforechange",
				this.onBeforechange, this);
		this.control({
					'usermanagelist' : {
						// 表格渲染
						'render' : this.render
					},
					'usermanagelist button[action=add]' : {
						// 打开添加信息窗口
						click : this.add
					},
					'usermanagelist button[action=update]' : {
						// 打开修改界面窗口
						click : this.update
					},
					'adduserwindow button[action=close]' : {
						// 关闭添加信息窗口
						click : this.closeAddWindow
					},
					'adduserwindow button[action=ok]' : {
						// 向后台请求添加用户的请求操作
						click : this.addUser
					},
					'edituserwindow button[action=close]' : {
						// 关闭修改信息窗口界面
						click : this.closeEditWindow
					},
					'edituserwindow button[action=ok]' : {
						// 向后台请求更新用户信息的操作
						click : this.updateUser
					},
					'usermanagelist button[action=delete]' : {
						// 向后台发送删除用户的请求
						click : this.deleteUser
					},
					'usermanagelist button[action=search]' : {
						// 搜素
						click : this.search
					}
				})
	},
	/**
	 * 分页监听事件
	 * 
	 * @param {}
	 *            _p
	 * @param {}
	 *            _o
	 * @return {Boolean}
	 */
	onBeforechange : function(_p, _o) {
		var grid = Ext.ComponentQuery.query("usermanagelist")[0];
		var cnName = Ext.getCmp("cnName").getValue();
		var start = (_o - 1) * grid.getStore().data.pageSize;
		var limit = _o * grid.getStore().data.pageSize;
		grid.getStore().proxy.extraParams = {
			start : start,
			limit : limit,
			cnName : cnName
		};
		return true;
	},
	/**
	 * 按条件搜索数据
	 */
	search : function() {
		var cnName = Ext.getCmp("cnName").getValue();
		// 处理搜索
		var grid = Ext.ComponentQuery.query("usermanagelist")[0];
		var limit = grid.getDockedItems('toolbar[dock=bottom]').pageSize; // 得到每页要显示的记录数
		Ext.data.StoreManager.lookup("app.store.config.usermanage.Store").load(
				{
					params : {
						start : 0,
						limit : limit,
						cnName : cnName
					}
				});

		grid.getStore().currentPage = 1; // 查询时重置页码。

	},
	/**
	 * 向后台发送删除用户的请求
	 */
	deleteUser : function() {
		var grid = Ext.ComponentQuery.query("usermanagelist")[0];
		var selModel = grid.getSelectionModel();
		var isGridSelected = selModel.hasSelection();
		if (!isGridSelected) {
			Ext.MessageBox.alert("注意", "请选择一行数据进行操作");
			return;
		}
		// 得到当前的页码
		var currentpage = grid.getDockedItems('toolbar[dock=bottom]')[0]
				.getStore().currentPage;
		var rsArray = grid.getSelectionModel().getSelection();
		for (var i = 0; i < rsArray.length; i++) {
			if (grid.getStore().indexOf(rsArray[i]) == 0) {
				if (currentpage != 1) {
					currentpage = currentpage - 1;
					grid.getDockedItems('toolbar[dock=bottom]')[0].getStore().currentPage--;
				}
			}
		}
		var rsArray = grid.getSelectionModel().getSelection();
		var rsCount = grid.getSelectionModel().getCount();
		if (rsCount > 0) {
			Ext.Msg.show({
				title : '删除确认?',
				msg : '确定要删除所选择的数据吗?删除后不可恢复!',
				buttons : Ext.Msg.OKCANCEL,
				icon : Ext.MessageBox.QUESTION,
				fn : function(bid, txt) {
					if (bid == 'ok') {
						var br = '';
						for (var i = 0; i < rsCount; i++) {
							if (rsArray[i].data && rsArray[i].data.id) {
								br += 'ids=' + rsArray[i].data.id + '&';
							}
						}
						Ext.Ajax.request({
							url : "user/delete?" + br,
							success : function(response) {
								var temp = Ext.JSON
										.decode(response.responseText);
								Ext.Msg.alert("系统提示", temp.message);
								if (temp.status) {
									var pagesize = grid
											.getDockedItems('toolbar[dock=bottom]')[0]
											.getStore().pageSize;
									grid.getStore().load({
										params : {
											start : (currentpage - 1)
													* pagesize,
											limit : pagesize,
											// page : (currentpage - 1) *
											// pagesize/pagesize + 1
											page : currentpage
											// 要显示的页码
										}
									});
									// //删除页面数据
									for (var i = 0; i < rsCount; i++) {
										grid.getStore().remove(rsArray[i]);
									}
								}
							}
						});
					}
				}
			});
		}

	},
	/**
	 * 向后台请求更新用户信息的操作
	 */
	updateUser : function() {
		var thisgrid = Ext.ComponentQuery.query("usermanagelist")[0];
		Ext.ComponentQuery.query("edituserform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "user/update",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.message);
				if (temp.status) {
					var win = Ext.ComponentQuery.query("edituserwindow")[0];
					win.close();
					thisgrid.getStore().reload();
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
	/**
	 * 关闭修改信息窗口界面
	 */
	closeEditWindow : function() {
		var win = Ext.ComponentQuery.query("edituserwindow")[0];
		win.close();
	},
	/**
	 * 向后台请求添加用户的请求操作
	 */
	addUser : function() {
		Ext.ComponentQuery.query("adduserform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "user/add",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.message);
				var thisgrid = Ext.ComponentQuery.query("usermanagelist")[0];
				if (temp.status) {
					var win = Ext.ComponentQuery.query("adduserwindow")[0];
					win.close();
					var count = thisgrid.getStore().count();
					var pageSize = thisgrid
							.getDockedItems('toolbar[dock=bottom]')[0]
							.getStore().pageSize;
					var currentpage = thisgrid
							.getDockedItems('toolbar[dock=bottom]')[0]
							.getStore().currentPage;
					var pageCount = thisgrid
							.getDockedItems('toolbar[dock=bottom]')[0]
							.getPageData().pageCount;
					if (count == pageSize) {
						if (currentpage == pageCount) {// 当前页是最后一页
							pageCount = pageCount + 1;
							thisgrid.getDockedItems('toolbar[dock=bottom]')[0]
									.getStore().currentPage = pageCount;
						} else {// 当前页不是最后一页
							thisgrid.getDockedItems('toolbar[dock=bottom]')[0]
									.moveLast();
							thisgrid.getDockedItems('toolbar[dock=bottom]')[0]
									.getStore().currentPage = pageCount;
						}
					}
					thisgrid.getStore().load({
								params : {
									start : (pageCount - 1) * pageSize,
									limit : pageSize
								}
							});
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
	/**
	 * 关闭添加信息窗口
	 */
	closeAddWindow : function() {
		var win = Ext.ComponentQuery.query("adduserwindow")[0];
		win.close();
	},
	/**
	 * 表格渲染
	 */
	render : function() {
		Ext.data.StoreManager.lookup("app.store.config.usermanage.Store")
				.load();
		Ext.getCmp('userManagerPagingToolbarId').on("beforechange",
				this.onBeforechange, this);
	},
	/**
	 * 打开添加信息窗口
	 */
	add : function() {
		// Ext.data.StoreManager.lookup("app.store.maintain.maintainmanage.add.MaintainItemStore").removeAll();
		if (Ext.ComponentQuery.query("adduserform")[0]) {
			Ext.ComponentQuery.query("adduserform")[0].getForm().reset();
		}
		if (!Ext.ComponentQuery.query("adduserwindow")[0]) {
			Ext.create('app.view.config.usermanage.add.Window', {}).show();
		} else {
			Ext.ComponentQuery.query("adduserwindow")[0].show();
		}
	},
	/**
	 * 打开修改界面窗口
	 */
	update : function() {
		// 打开修改界面窗口
		var grid = Ext.ComponentQuery.query("usermanagelist")[0];
		var selModel = grid.getSelectionModel();
		var isGridSelected = selModel.hasSelection();
		if (!isGridSelected) {
			Ext.MessageBox.alert("注意", "请选择一行数据进行操作");
			return;
		}
		var recs = selModel.getCount();
		if (recs > 1) {
			Ext.MessageBox.alert("注意", "你选择的记录数大于一行,请重新选择");
			return;
		}
		var record = selModel.getLastSelected(); // 获取最后一个选择的一行的数据
		if (!Ext.ComponentQuery.query("edituserwindow")[0]) {
			Ext.create("app.view.config.usermanage.edit.Window", {}).show();
		} else if (Ext.ComponentQuery.query("edituserwindow")[0].isHidden()) {
			Ext.ComponentQuery.query("edituserwindow")[0].show();
		}
		// if (Ext.ComponentQuery.query("edituserform")[0]) {
		// Ext.ComponentQuery.query("edituserform")[0].getForm().reset();
		// }
		// 填充表单
		Ext.ComponentQuery.query("edituserform")[0].getForm().setValues([{
					id : 'id',
					value : record.get('id')
				}, {
					id : 'name',
					value : record.get('name')
				}, {
					id : 'cnName',
					value : record.get('username')
				}]);
		// Ext.ComponentQuery.query("edituserform>combo")[0].setValue(record
		// .get('departmentId'));
		// Ext.ComponentQuery.query("edituserform>combo")[1].setValue(record
		// .get('roleId'));
	}

});
