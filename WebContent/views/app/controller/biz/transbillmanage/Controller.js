Ext.define('app.controller.biz.transbillmanage.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.biz.transbillmanage.List','app.view.biz.transbillmanage.add.Add','app.view.biz.transbillmanage.edit.Edit'],
	stores : ['app.store.biz.transbillmanage.Store'],
	models : ['app.model.biz.transbillmanage.Model'],
	init : function() {
		// 以下这行防止要点击2次左边的菜单栏才显示右边的表格
		newTab("transbillmanagelist", "transbillmanagelist", "业务管理>运单管理", "运单管理");
		// 给store添加监听事件,捕获登陆session过期的异常信息
		// 添加分页监听事件
		Ext.getCmp('transbillManagerPagingToolbarId').on("beforechange",
				this.onBeforechange, this);
		this.control({
					'transbillmanagelist' : {
						// 表格渲染
						'render' : this.render
					},
					'transbillmanagelist button[action=add]' : {
						// 打开添加信息窗口
						click : this.add
					},
					'transbillmanagelist button[action=update]' : {
						// 打开修改界面窗口
						click : this.update
					},
					'addtransbillwindow button[action=close]' : {
						// 关闭添加信息窗口
						click : this.closeAddWindow
					},
					'addtransbillwindow button[action=ok]' : {
						// 向后台请求添加运单的请求操作
						click : this.addB
					},
					'edittransbillwindow button[action=close]' : {
						// 关闭修改信息窗口界面
						click : this.closeEditWindow
					},
					'edittransbillwindow button[action=ok]' : {
						// 向后台请求更新运单信息的操作
						click : this.updateB
					},
					'transbillmanagelist button[action=delete]' : {
						// 向后台发送删除运单的请求
						click : this.deleteB
					},
					'transbillmanagelist button[action=search]' : {
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
		var grid = Ext.ComponentQuery.query("transbillmanagelist")[0];
		var billNo = Ext.getCmp("billNo").getValue();
		var start = (_o - 1) * grid.getStore().data.pageSize;
		var limit = _o * grid.getStore().data.pageSize;
		grid.getStore().proxy.extraParams = {
			start : start,
			limit : limit,
			billNo : billNo
		};
		return true;
	},
	/**
	 * 按条件搜索数据
	 */
	search : function() {
		var billNo = Ext.getCmp("billNo").getValue();
		// 处理搜索
		var grid = Ext.ComponentQuery.query("transbillmanagelist")[0];
		var limit = grid.getDockedItems('toolbar[dock=bottom]').pageSize; // 得到每页要显示的记录数
		Ext.data.StoreManager.lookup("app.store.biz.transbillmanage.Store").load(
				{
					params : {
						start : 0,
						limit : limit,
						billNo : billNo
					}
				});

		grid.getStore().currentPage = 1; // 查询时重置页码。

	},
	/**
	 * 向后台发送删除运单的请求
	 */
	deleteB : function() {
		var grid = Ext.ComponentQuery.query("transbillmanagelist")[0];
		var selModel = grid.getSelectionModel();
		var isGridSelected = selModel.hasSelection();
		if (!isGridSelected) {
			Ext.MessageBox.alert("注意", "请选择至少一行数据进行操作");
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
							url : "../transbill/delete?" + br,
							method:'post',
							success : function(response) {
								var temp =Ext.decode(response.responseText);
								Ext.Msg.alert("系统提示", temp.msg);
								if (temp.success) {
									grid.getStore().reload();
								}
							}
						});
					}
				}
			});
		}

	},
	/**
	 * 向后台请求更新运单信息的操作
	 */
	updateB : function() {
		var thisgrid = Ext.ComponentQuery.query("transbillmanagelist")[0];
		Ext.ComponentQuery.query("edittransbillform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "../transbill/update",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.msg);
				if (temp.success) {
					var win = Ext.ComponentQuery.query("edittransbillwindow")[0];
					win.close();
					thisgrid.getStore().reload();
					return true;
				} else {
					return false;
				}
			},
			failure : function(form, response) { // 当success为false时执行的回调函数
				var temp = false;
				if (response.result) {
					temp = response.result;
				} else {
					temp = {
						'msg' : '请确保填写所有必填信息'
					};
				}
				Ext.Msg.alert("系统提示", temp.msg);
				return false;
			}
		});
	},
	/**
	 * 关闭修改信息窗口界面
	 */
	closeEditWindow : function() {
		var win = Ext.ComponentQuery.query("edittransbillwindow")[0];
		win.close();
	},
	/**
	 * 向后台请求添加运单的请求操作
	 */
	addB : function() {
		Ext.ComponentQuery.query("addtransbillform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "../transbill/save",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.msg);
				var thisgrid = Ext.ComponentQuery.query("transbillmanagelist")[0];
				if (temp.success) {
					var win = Ext.ComponentQuery.query("addtransbillwindow")[0];
					win.close();
					thisgrid.getStore().reload();
					return true;
				} else {
					return false;
				}
			},
			failure : function(form, response) { // 当success为false时执行的回调函数
				var temp = false;
				if (response.result) {
					temp = response.result;
				} else {
					temp = {
						'msg' : '请确保填写所有必填信息'
					};
				}
				Ext.Msg.alert("系统提示", temp.msg);
				return false;
			}
		});

	},
	/**
	 * 关闭添加信息窗口
	 */
	closeAddWindow : function() {
		var win = Ext.ComponentQuery.query("addtransbillwindow")[0];
		win.close();
	},
	/**
	 * 表格渲染
	 */
	render : function() {
		Ext.data.StoreManager.lookup("app.store.biz.transbillmanage.Store")
				.load();
		Ext.getCmp('transbillManagerPagingToolbarId').on("beforechange",
				this.onBeforechange, this);
	},
	/**
	 * 打开添加信息窗口
	 */
	add : function() {
		// Ext.data.StoreManager.lookup("app.store.maintain.maintainmanage.add.MaintainItemStore").removeAll();
		if (Ext.ComponentQuery.query("addtransbillform")[0]) {
			Ext.ComponentQuery.query("addtransbillform")[0].getForm().reset();
		}
		if (!Ext.ComponentQuery.query("addtransbillwindow")[0]) {
			Ext.create('app.view.biz.transbillmanage.add.Window', {}).show();
		} else {
			Ext.ComponentQuery.query("addtransbillwindow")[0].show();
		}
	},
	/**
	 * 打开修改界面窗口
	 */
	update : function() {
		// 打开修改界面窗口
		var grid = Ext.ComponentQuery.query("transbillmanagelist")[0];
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
		if (!Ext.ComponentQuery.query("edittransbillwindow")[0]) {
			Ext.create("app.view.biz.transbillmanage.edit.Window", {}).show();
		} else if (Ext.ComponentQuery.query("edittransbillwindow")[0].isHidden()) {
			Ext.ComponentQuery.query("edittransbillwindow")[0].show();
		}
		// if (Ext.ComponentQuery.query("edittransbillform")[0]) {
		// Ext.ComponentQuery.query("edittransbillform")[0].getForm().reset();
		// }
		// 填充表单
		Ext.ComponentQuery.query("edittransbillform")[0].getForm().setValues([{
					id : 'id',
					value : record.get('id')
				}, {
					id : 'billNo',
					value : record.get('billNo')
				}, {
					id : 'transTime',
					value : record.get('transTime')
				}, {
					id : 'loadGoodsPoint',
					value : record.get('loadGoodsPoint')
				}, {
					id : 'dest',
					value : record.get('dest')
				}, {
					id : 'company',
					value : record.get('company')
				}, {
					id : 'contractor',
					value : record.get('contractor')
				}, {
					id : 'contractPhone',
					value : record.get('contractPhone')
				}, {
					id : 'fax',
					value : record.get('fax')
				}, {
					id : 'address',
					value : record.get('address')
				}, {
					id : 'fee',
					value : record.get('fee')
				}]);
		// Ext.ComponentQuery.query("edittransbillform>combo")[0].setValue(record
		// .get('departmentId'));
		// Ext.ComponentQuery.query("edittransbillform>combo")[1].setValue(record
		// .get('roleId'));
	}

});
