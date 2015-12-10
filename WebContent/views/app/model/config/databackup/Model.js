Ext.define('app.model.config.databackup.Model', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : "string"
					}, {
						name : 'url',
						type : 'string'
					}, {
						name : 'date',
						type : 'string'
					}, {
						name : 'user.username',
						type : 'string'
					}]

		});