Ext.define('app.store.config.usermanage.Store', {
			extend : 'Ext.data.Store',
			model : 'app.model.config.usermanage.Model',
			autoLoad : true,
			// autoSync : true,// 需要同步
			remoteSort : true,
			pageSize : 15,
			proxy : {
				type : 'ajax',
				url : '../user/list',
				reader : {
					type : 'json',
					totalProperty : 'total'
				}
			}

		});
