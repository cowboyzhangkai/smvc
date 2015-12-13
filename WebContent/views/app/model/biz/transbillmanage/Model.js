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
		name : 'loadGoodsPoint',
		type : 'string'
	}, {
		name : 'dest',
		type : 'string'
	}, {
		name : 'company',
		type : 'string'
	}, {
		name : 'contractor',
		type : 'string'
	}, {
		name : 'contractPhone',
		type : 'string'
	}, {
		name : 'fax',
		type : 'string'
	}, {
		name : 'address',
		type : 'string'
	}, {
		name : 'fee',
		type : 'string'
	} ]

});