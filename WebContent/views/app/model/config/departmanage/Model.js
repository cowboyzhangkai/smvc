Ext.define('app.model.config.departmanage.Model', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : "string"
					}, {
						name : 'name',
						type : 'string'
					}, {
						name : 'departNum',
						type : 'string'
					}, {
						name : 'description',
						type : 'string'
					}]

		});