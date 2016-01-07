/*******************************************************************************
 * 系统菜单
 */
Ext.define('app.view.leftmenu.LeftMenu', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.leftmenu',
	layout : 'accordion',
	collapsible : false,
	split : true,
	title : '菜单',
	iconCls : 'menu',
	width : 200,
	items : [ {
		title : '运输管理',
		iconCls : 'transbillmanage',
		autoScroll : true,
		xtype : "panel",
		id : 'transbillmanagepanel',
		items : [ {
			xtype : 'transbillmanagemenu'
		} ]
	}, {
		title : '结算管理',
		iconCls : 'accountmanage',
		autoScroll : true,
		xtype : "panel",
		id : 'accountmanagepanel'
	}, {
		title : '报表管理',
		iconCls : 'reportmanage',
		autoScroll : true,
		xtype : "panel",
		id : 'reportmanagepanel'
	}, {
		title : '系统管理',
		iconCls : 'usermanage',
		autoScroll : true,
		xtype : "panel",
		id : 'usermanagepanel',
		items : [ {
			xtype : 'usermanagemenu'
		} ]
	} ],
	initComponent : function() {
		this.callParent(arguments);
	}
});