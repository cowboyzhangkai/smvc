Ext.define('app.store.biz.transbillmanage.Store', {
	extend : 'Ext.data.Store',
	model : 'app.model.biz.transbillmanage.Model',
	autoLoad : true,
	// autoSync : true,// 需要同步
	remoteSort : true,
	pageSize : 15,
	proxy : {
		type : 'ajax',
		url : '../transbill/list',
		reader : {
			type : 'json',
			totalProperty : 'total',
			root : 'rows'
		}
	}

});
