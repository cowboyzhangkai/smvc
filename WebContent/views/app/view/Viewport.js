/*******************************************************************************
 * 主界面
 */
Ext.define('app.view.Viewport', {
			extend : 'Ext.container.Viewport',
			alias : 'widget.indexViewport',
			layout : 'border',
			items : [{
						xtype : 'headpanel',
						region : 'north'
					}, {
						xtype : 'leftmenu',
						region : 'west'
					}, {
						xtype : "rightpanel",
						region : "center"// 设置位置
					}/*, {
						xtype : 'rightmenu',
						region : 'east'
					}*/],
			initComponent : function() {
				this.callParent(arguments);
			}
		});