Ext.define('app.model.biz.transbillmanage.Model', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : "string"
	}, {
		name : 'billNo',
		type : "string"
	}, {
		name : 'transTime',
		type : "string"
	}, {
		name : 'fromStation',
		type : 'string'
	}, {
		name : 'toStation',
		type : 'string'
	}, {
		name : 'transCompany',
		type : 'string'
	}, {
		name : 'transPhone',
		type : 'string'
	}, {
		name : 'destCompany',
		type : 'string'
	}, {
		name : 'destTel',
		type : 'string'
	}, {
		name : 'destPhone',
		type : 'string'
	}, {
		name : 'destAddress',
		type : 'string'
	}, {
		name : 'payType',
		type : 'string'
	} ]

});