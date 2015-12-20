/*******************************************************************************
 * 右边容器视图
 */
Ext.define('app.view.rightpanel.RightPanel', {
	extend : 'Ext.tab.Panel',
	alias : 'widget.rightpanel',
	id : 'rightpanel',
	activeTab : 0,
	tabPosition : 'top',
	tools : [ {
		xtype : 'toolbar',
		padding : '0 0',
		border : '0 0',
		style : 'background:transparent;',
		items : [ {
			text : '系统设置',
			height : 20,
			menu : {
				items : [ {
					text : '修改密码'
				}, {
					text : '退出系统',
					handler : function() {
						Security.logout();
					}
				} ]
			}
		} ]
	} ],
	items : [ {
		title : '起始页',
		layout : 'fit',
		items : [ {
			xtype : 'homepanel',
			bodyStyle : {
				padding : 0,
				margin : 0
			// background : 'url(images/right.jpg) no-repeat 50%
			// 0 #FFFFFF;'
			}
		} ],
	} ],
	initComponent : function() {
		this.callParent(arguments);
	}

});