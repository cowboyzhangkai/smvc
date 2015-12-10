Ext.define('app.controller.rightpanel.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.rightpanel.RightPanel', 'app.view.rightpanel.HomePanel'],
	stores : [],
	models : [],
	init : function() {
		this.control({
					'homepanel monthfield' : {
						//change : this.change
					}
				});

	},
	change : function( obj, newValue, oldValue, eOpts ){
		this.yearMonthFieldRender();
	},

	/**
	 * **id：新建tab的id type：新建tab里面嵌套的view name：Title
	 */
	addTab : function(id, type, name) {
		if (Ext.getCmp("rightpanel").getComponent(id)) {
			Ext.getCmp("rightpanel").remove(id);
		}
		Ext.getCmp("rightpanel").add({
			title : name,
			id : id,
			xtype : 'panel',
			border : false,
			layout : 'anchor',
			items : [{
				xtype : 'panel',
				anchor : '100% 10%',
				border : false,
				height : 50,
				bodyCls : 'x-accordion-hd',
				// html : '<font class="x-header-text">' + name + '</font>',
				html : '<div style="color: #000;font-weight:bold; line-height: 160%; padding: 0.3em 0.3em; border: 0px solid #d3d3d3; margin: 1em; background-color: #aad2f0; border-radius: 3px 3px 3px 3px;">'
						+ name + '</div>'
			}, {
				xtype : type,
				anchor : '100% 90%',
				bodyStyle : {
					padding : '5 5 5 5'
				}
			}],
			closable : true
		});
		Ext.getCmp("rightpanel").setActiveTab(id);
	}
});