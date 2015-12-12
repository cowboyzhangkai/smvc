/**
 * 添加保养信息的窗口(用于包含保养信息panel
 */
Ext.define('app.view.config.usermanage.add.Window', {
			extend : 'Ext.window.Window',
			alias : 'widget.adduserwindow',
			title : "添加用户",
			width : 360,
			height : 300,
//			renderTo:'maintainmanage',
			autoScroll : true,
			plain : true,
			closeAction : "hide",// 使关闭模式为隐藏（hide）
			modal : true,
			items : [{
				xtype : 'adduserform'
			}],
			buttons : [{
						text : "确 定",
						action : 'ok'
					}, {
						text : "关 闭",
						action : 'close'
					}]
			
});
