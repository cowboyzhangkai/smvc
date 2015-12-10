Ext.define('app.controller.headpanel.Controller', {
	extend : 'Ext.app.Controller',
	views : [
		'app.view.headpanel.Window',
		'app.view.headpanel.Panel'
	],
	init : function() {
		this.control({
			'headpanelwindow button[action=close]' : {
				click : this.close
			}
		});
	},
	close : function(btn){
		Ext.ComponentQuery.query("headpanelwindow")[0].close();
	}
});