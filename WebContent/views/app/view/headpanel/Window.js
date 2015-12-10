Ext.define('app.view.headpanel.Window', {
			extend : 'Ext.window.Window',
			alias : 'widget.headpanelwindow',
			title : "管理系统",
			width : 480,
			height : 360,
			frame : false,
			autoScroll : true,
			closeAction : "close",// 使关闭模式为隐藏（hide）
//			modal : true,
			plain : false,//设置背景为透明
			constrain : true,//限制窗口不超出浏览器的边界
			onEsc : false,
			layout : 'fit',
			items : [{
				xtype : 'aboutpanel'
			}],
			buttons : [{
                text:"关 闭",
                action : 'close'
            }]
});
