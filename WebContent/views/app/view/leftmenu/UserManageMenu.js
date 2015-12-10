/*******************************************************************************
 * 模块下面的子菜单
 */
Ext.define('app.view.leftmenu.UserManageMenu', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.usermanagemenu',
	hideHeaders : true,
	border : false,
	initComponent : function() {
		this.store = 'app.store.leftmenu.UserManageMenuStore',
				this.columns = [ {
					header : '',
					dataIndex : 'userManageMenuName',
					flex : 1,
					menuDisabled : true,
					sortable : false
				} ], this.callParent(arguments);
	}
});