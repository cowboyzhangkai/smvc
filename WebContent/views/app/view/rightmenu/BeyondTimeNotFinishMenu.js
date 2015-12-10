/*******************************************************************************
 * 超时未完成提醒菜单下的的子菜单
 */
Ext.define('app.view.rightmenu.BeyondTimeNotFinishMenu', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.beyondtimenotfinishmenu',
	hideHeaders : true,
	border : false,
	initComponent : function() {
		this.store = 'app.store.rightmenu.BeyondTimeNotFinishMenuStore', this.columns = [
				{
					header : '',
					dataIndex : 'beyondTimeNotFinishMenuName',
					flex : 1,
					menuDisabled : true,
					sortable : false
				}], this.callParent(arguments);
	}
});