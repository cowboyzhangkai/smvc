Ext.define('app.controller.config.departmanage.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.config.departmanage.List'],
	stores : ['app.store.config.departmanage.Store'],
	models : ['app.model.config.departmanage.Model'],
	init : function() {
		// 以下这行防止要点击2次左边的菜单栏才显示右边的表格
		newTab("departmanagelist", "departmanagelist", "用户管理>部门管理", "部门管理");
		// 给store添加监听事件,捕获登陆session过期的异常信息
		Ext.data.StoreManager.lookup("app.store.config.departmanage.Store")
				.getProxy().addListener("exception",
						function exception(proxy, response, operation) {
							if (Ext.JSON.decode(response.responseText).message) {
								Ext.Msg
										.alert(
												"系统提醒",
												Ext.JSON
														.decode(response.responseText).message);
							}
						});
		// 添加分页监听事件
		Ext.getCmp('departmentmanagepaggingbar').on("beforechange",
				this.onBeforechange, this);
		this.control({
					'departmanagelist' : {
						// 渲染
						'render' : this.render
					},
					'departmanagelist button[action=add]' : {
						// 显示添加窗口
						click : this.add
					},
					'departmanagelist button[action=update]' : {
						// 显示修改信息窗口
						click : this.update
					},
					'adddepartwindow button[action=close]' : {
						// 关闭添加信息窗口
						click : this.closeAddWindow
					},
					'adddepartwindow button[action=ok]' : {
						// 请求添加信息操作
						click : this.addDepartment
					},
					'editdepartwindow button[action=close]' : {
						// 关闭修改信息窗口
						click : this.closeEditWindow
					},
					'editdepartwindow button[action=ok]' : {
						// 请求修改信息操作
						click : this.updateDepartment
					},
					'departmanagelist button[action=delete]' : {
						// 请求删除信息操作
						click : this.deletedepartment
					},
					'departmanagelist button[action=search]' : {
						// 搜索操作
						click : this.search
					}
				})
	},
	/**
	 * 处理分页监听事件
	 * 
	 * @param {}
	 *            _p The page number that will be loaded on change
	 * @param {}
	 *            _o
	 * @return {Boolean}
	 */
	onBeforechange : function(_p, _o) {
		var grid = Ext.ComponentQuery.query("departmanagelist")[0];
		var departmentId = Ext.getCmp("departSearch").getValue();
		var start = (_o - 1) * grid.getStore().data.pageSize
		var limit = _o * grid.getStore().data.pageSize
		grid.getStore().proxy.extraParams = {
			start : start,
			limit : limit,
			departmentId : departmentId
		};
		return true;
	},
	/**
	 * 按条件进行搜索数据的操作
	 */
	search : function() {
		var searchld = Ext.getCmp("departSearch").getValue();
		// 处理搜索
		var grid = Ext.ComponentQuery.query("departmanagelist")[0];
		var limit = grid.getDockedItems('toolbar[dock=bottom]').pageSize; // 得到每页要显示的记录数
		Ext.data.StoreManager.lookup("app.store.config.departmanage.Store")
				.load({
							params : {
								start : 0,
								limit : limit,
								departmentId : searchld
							}
						});

		grid.getStore().currentPage = 1; // 查询时重置页码。
	},
	/**
	 * 向后台请求删除信息的操作
	 */
	deletedepartment : function() {
		var grid = Ext.ComponentQuery.query("departmanagelist")[0];
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
							url : "depart/delete?" + br,
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
	 * 向后台请求更新信息的操作
	 */
	updateDepartment : function() {
		var thisgrid = Ext.ComponentQuery.query("departmanagelist")[0];
		Ext.ComponentQuery.query("editdepartform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "depart/update",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.message);
				if (temp.status) {
					var win = Ext.ComponentQuery.query("editdepartwindow")[0];
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
	 * 关闭修改信息的窗口
	 */
	closeEditWindow : function() {
		var win = Ext.ComponentQuery.query("editdepartwindow")[0];
		win.close();
	},
	/**
	 * 向后台请求添加信息的操作
	 */
	addDepartment : function() {
		Ext.ComponentQuery.query("adddepartform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : "depart/add",
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.message);
				var thisgrid = Ext.ComponentQuery.query("departmanagelist")[0];
				if (temp.status) {
					var win = Ext.ComponentQuery.query("adddepartwindow")[0];
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
	 * 关闭添加信息的窗口
	 */
	closeAddWindow : function() {
		var win = Ext.ComponentQuery.query("adddepartwindow")[0];
		win.close();
	},

	/**
	 * 表格渲染事件
	 */
	render : function() {
		Ext.data.StoreManager.lookup("app.store.config.departmanage.Store")
				.load();
		Ext.getCmp('departmentmanagepaggingbar').on("beforechange",
				this.onBeforechange, this);
	},

	/**
	 * 打开添加信息的窗口
	 */
	add : function() {
		// Ext.data.StoreManager.lookup("app.store.maintain.maintainmanage.add.MaintainItemStore").removeAll();
		if (Ext.ComponentQuery.query("adddepartform")[0]) {
			Ext.ComponentQuery.query("adddepartform")[0].getForm().reset();
		}
		if (!Ext.ComponentQuery.query("adddepartwindow")[0]) {
			Ext.create('app.view.config.departmanage.add.Window', {}).show();
		} else {
			Ext.ComponentQuery.query("adddepartwindow")[0].show();
		}
	},
	/**
	 * 打开修改信息的窗口
	 */
	update : function() {
		// 打开修改界面窗口
		var grid = Ext.ComponentQuery.query("departmanagelist")[0];
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
		if (!Ext.ComponentQuery.query("editdepartwindow")[0]) {
			Ext.create("app.view.config.departmanage.edit.Window", {}).show();
		} else if (Ext.ComponentQuery.query("editdepartwindow")[0].isHidden()) {
			Ext.ComponentQuery.query("editdepartwindow")[0].show();
		}
		// 填充表单
		Ext.ComponentQuery.query("editdepartform")[0].getForm().setValues([{
					id : 'id',
					value : record.get('id')
				}, {
					id : 'departNum',
					value : record.get('departNum')
				}, {
					id : 'name',
					value : record.get('name')
				}, {
					id : 'description',
					value : record.get('description')
				}]);
	}

});
