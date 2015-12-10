/*******************************************************************************
 * 系统菜单
 */
Ext.define('app.view.rightmenu.RightMenu', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.rightmenu',
			layout : 'accordion',
			collapsible : false,
			collapsed : true,// 设置默认状态为隐藏
			collapsedCls : {
				width : '10px'
			},
			split : true,
			pack : 'end',
			collapseDirection : 'right',
			title : '提醒项',
			animCollapse : true,
			animate : true,
			iconCls : 'rightmenu',
			hideCollapseTool : true,
			headerPosition : 'top',
			width : 400,
			titleAlign : 'left',
			align : 'right',
			items : [new Ext.TabPanel({// 窗体中中是一个一个TabPanel
				autoTabs : true,
				activeTab : 0,
				deferredRender : false,
				border : false
			})],
			initComponent : function() {
				this.callParent(arguments);
			}
		});