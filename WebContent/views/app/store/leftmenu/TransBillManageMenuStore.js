Ext
		.define(
				'app.store.leftmenu.TransBillManageMenuStore',
				{
					extend : 'Ext.data.Store',
					model : 'app.model.leftmenu.TransBillManageMenuModel',
					data : {
						'items' : [
								{
									"transbillManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>运单管理</li>"
								},
								{
									"transbillManageMenuName" : "<li style='margin:2 0;color:#1A56A8'>流程管理</li>"
								}]
					},
					proxy : {
						type : 'memory',
						reader : {
							type : 'json',
							root : 'items'
						}
					}
				});