Ext.define('app.store.config.privilegemanage.Store', {
	extend : 'Ext.data.TreeStore',
	/* model : 'app.model.config.privilegemanage.Model', */
	autoLoad : false,
	autoSync : false,
	proxy : {
		type : 'ajax',
		url : "role/getRoleTreeList"
	},
	reader : {
		type : 'json'
	},
	root : {
		id : 'root',
		text : '权限管理',
		expanded : false,
		children : [{
					id : '01',
					text : "角色",
					leaf : false
				}
		/*
		 * { id : '02', text : "功能权限组", leaf : false }
		 */]
	}
		/*
		 * folderSort: true, sorters: [{ property: 'id', direction: 'ASC' }]
		 */
	});