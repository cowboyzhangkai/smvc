/*******************************************************************************
 * 主页所要显示的panel
 */
Ext.define('app.view.rightpanel.HomePanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.homepanel',
	layout : {
		type : 'vbox'
	},
	frame : false,
	border : false,
	items : [{
				xtype : 'panel',
				dockedItems : [{
							xtype : 'toolbar',
							dock : 'top',
							items : [{
										xtype : 'label',
										text : '首页显示：'
									}]
						}],
				border : false,
				frame : false,
				flex : .2,
				width : '100%'
			}],
	initComponent : function() {
		this.callParent(arguments);
	}
});