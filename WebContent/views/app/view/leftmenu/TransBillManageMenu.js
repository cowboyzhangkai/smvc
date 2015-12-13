/*******************************************************************************
 * 模块下面的子菜单
 */
Ext.define('app.view.leftmenu.TransBillManageMenu', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.transbillmanagemenu',
	hideHeaders : true,
	border : false,
	initComponent : function() {
		this.store = 'app.store.leftmenu.TransBillManageMenuStore',
				this.columns = [ {
					header : '',
					dataIndex : 'transbillManageMenuName',
					flex : 1,
					menuDisabled : true,
					sortable : false
				} ], this.callParent(arguments);
	}
});