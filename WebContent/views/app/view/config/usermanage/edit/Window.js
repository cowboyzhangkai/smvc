/**
 * 修改保养信息的窗口
 */
Ext.define('app.view.config.usermanage.edit.Window', {
			extend : 'Ext.window.Window',
			alias : 'widget.edituserwindow',
			title : "修改用户信息",
			width : 360,
			height : 300,
			autoScroll : true,
			plain : true,
			closeAction : "close",// 使关闭模式为隐藏（hide）
			modal : true,
			items : [{
						xtype : 'edituserform'
					}],
			buttons : [{
						text : "确 定",
						action : 'ok'
					}, {
						text : "关 闭",
						action : 'close'
					}]

		});
