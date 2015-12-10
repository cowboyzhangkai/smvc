Ext
		.define(
				'app.store.leftmenu.UserManageMenuStore',
				{
					extend : 'Ext.data.Store',
					model : 'app.model.leftmenu.UserManageMenuModel',
					data : {
						'items' : [
								{
									"userManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>人员管理</li>"
								},
								{
									"userManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>部门管理</li>"
								},
								{
									"userManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>权限管理</li>"
								},
								{
									"userManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>数据备份</li>"
								} ]
					},
					proxy : {
						type : 'memory',
						reader : {
							type : 'json',
							root : 'items'
						}
					}
				});