Ext
		.define(
				'app.store.rightmenu.BeyondTimeNotFinishMenuStore',
				{
					extend : 'Ext.data.Store',
					model : 'app.model.rightmenu.BeyondTimeNotFinishMenuModel',
					data : {
						'items' : [
								{
									"beyondTimeNotFinishMenuName" : "<li style='margin:2 0;color:#1A56A8'>A提醒</li>"
								},
								{
									"beyondTimeNotFinishMenuName" : "<li style='margin:2 0;color:#1A56A8'>B提醒</li>"
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