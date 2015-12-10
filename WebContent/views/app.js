/**
 * 此句话的作用是enbale loading of the controller, model, view, and store files
 */
Ext.Loader.setConfig({
	enabled : true
});
Ext.application({// 创建应用程序的实例
	requires : [ 'Ext.container.Viewport' ],
	name : 'app',
	appFolder : 'app',
	controllers : [ 'app.controller.Controller',
			'app.controller.leftmenu.Controller',
			'app.controller.rightpanel.Controller',
			'app.controller.headpanel.Controller' ],
	launch : function() {
		application = this;
		Ext.tip.QuickTipManager.init();
	},
	autoCreateViewport : true
});
