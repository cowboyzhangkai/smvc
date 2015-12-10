Ext
		.define(
				'app.store.rightmenu.FinishTimeLimitMenuStore',
				{
					extend : 'Ext.data.Store',
					model : 'app.model.rightmenu.FinishTimeLimitMenuModel',
					data : {
						'items' : [
								{
									"finishTimeLimitMenuName" : "<li style='margin:2 0;color:#1A56A8'>A提醒</li>"
								},
								{
									"finishTimeLimitMenuName" : "<li style='margin:2 0;color:#1A56A8'>B提醒</li>"
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