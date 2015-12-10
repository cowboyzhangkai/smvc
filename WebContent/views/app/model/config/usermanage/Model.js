Ext.define('app.model.config.usermanage.Model', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'id',
						type : "string"
					}, {
						name : 'name',
						type : "string"
					}, {
						name : 'cnName',
						type : "string"
					}, {
						name : 'department.id',
						type : 'string'
					}, {
						name : 'department.name',
						type : 'string'
					}]

		});