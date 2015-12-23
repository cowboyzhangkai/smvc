/**
 * 修改保养信息的窗口
 */
Ext.define('app.view.rightpanel.loginfomanage.edit.Window', {
			extend : 'Ext.window.Window',
			alias : 'widget.editloginfowindow',
			title : "修改密码",
			width : 360,
			height : 200,
			autoScroll : true,
			plain : true,
			closeAction : "close",// 使关闭模式为隐藏（hide）
			modal : true,
			items : [{
						xtype : 'editloginfoform'
					}],
			buttons : [{
						text : "确 定",
						action : 'ok'
					}, {
						text : "关 闭",
						action : 'close'
					}]

		});
