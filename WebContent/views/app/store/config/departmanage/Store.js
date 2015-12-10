Ext.define('app.store.config.departmanage.Store', {
			extend : 'Ext.data.Store',
			model : 'app.model.config.departmanage.Model',
			autoLoad : true,
			autoSync : true,// 需要同步
			remoteSort : true,
			pageSize : 15,
			proxy : {
				type : 'ajax',
				url : 'depart/getAllList',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'total'
				}
			}

		});
