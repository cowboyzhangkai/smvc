/*******************************************************************************
 * 归档提醒菜单下的的子菜单
 */
Ext.define('app.view.rightmenu.ArchiveMenu', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.archivemenu',
			hideHeaders : true,
			border : false,
			initComponent : function() {
				this.store = 'app.store.rightmenu.ArchiveMenuStore', this.columns = [
						{
							header : '',
							dataIndex : 'archiveMenuName',
							flex : 1,
							menuDisabled : true,
							sortable : false
						}], this.callParent(arguments);
			}
		});