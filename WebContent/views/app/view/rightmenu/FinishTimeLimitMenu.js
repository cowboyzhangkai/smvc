/*******************************************************************************
 * 完成时限提醒菜单下的的子菜单
 */
Ext.define('app.view.rightmenu.FinishTimeLimitMenu', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.finishtimelimitmenu',
	hideHeaders : true,
	border : false,
	initComponent : function() {
		this.store = 'app.store.rightmenu.FinishTimeLimitMenuStore', this.columns = [
				{
					header : '',
					dataIndex : 'finishTimeLimitMenuName',
					flex : 1,
					menuDisabled : true,
					sortable : false
				}], this.callParent(arguments);
	}
});