/*****
 * 右边容器视图
 */
Ext.define('app.view.rightpanel.RightPanel', {
			extend : 'Ext.tab.Panel',
			alias : 'widget.rightpanel',
			id:'rightpanel',
			activeTab : 0,
			tabPosition : 'top',
			items : [{
						title : '起始页',
						layout:'fit',
						items:[{
							xtype:'homepanel'
							,bodyStyle : {
							padding:0,
							margin:0
							//background : 'url(images/right.jpg) no-repeat 50% 0 #FFFFFF;'
						}}]
					}],
			initComponent : function() {
				this.callParent(arguments);
			}

		});