Ext.define('app.controller.config.databackup.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.config.databackup.List'],
	stores : ['app.store.config.databackup.Store'],
	models : ['app.model.config.databackup.Model'],
	init : function() {
		// 以下这行防止要点击2次左边的菜单栏才显示右边的表格
		newTab("databackuplist", "databackuplist", "系统管理>数据备份", "数据备份");
		// 给store添加监听事件,捕获登陆session过期的异常信息
		Ext.data.StoreManager.lookup("app.store.config.databackup.Store")
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
		this.control({
					'databackuplist' : {
						'render' : this.render
					},
					'databackuplist button[action=backup]' : {
						click : this.backup
					}
				});
	},
	/**
	 * 表格渲染事件
	 */
	render : function() {
		Ext.data.StoreManager.lookup("app.store.config.databackup.Store")
				.load();
	},
	/**
	 * 备份操作
	 */
	backup : function() {
		Ext.MessageBox.confirm("提示", "一天中只有最后一次备份的文件有效,你确认要备份数据库文件吗？",
				function(btn) {
					if (btn == "yes") {
						Ext.Ajax.request({
									url : "databackup/backup",
									timeout : 10000,
									success : function(response, options) {
										var val = Ext.JSON
												.decode(response.responseText);
										if (status.status) {
											Ext.Msg.alert("系统提示", val.message);
										} else {
											Ext.Msg.alert("系统提示", val.message);
										}
									},
									failure : function(response, options) {
										Ext.MessageBox.alert("系统提示",
												"备份数据库文件失败！");
									}
								});
					}
				});
	}
});
