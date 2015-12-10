Ext.define('app.store.config.databackup.Store', {
			extend : 'Ext.data.Store',
			model : 'app.model.config.databackup.Model',
			autoLoad : true,
			autoSync : true,// 需要同步
			remoteSort : true,
			pageSize : 15,
			proxy : {
				type : 'ajax',
				url : 'databackup/listAll',
				reader : {
					type : 'json',
					root : 'data',
					totalProperty : 'total'
				}
			}

		});
