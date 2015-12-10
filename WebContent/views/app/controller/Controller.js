Ext.define('app.controller.Controller', {
	extend : 'Ext.app.Controller',
	views : [
		'app.view.Viewport'
	],
	init : function() {
		this.control({
			'indexViewport' : {
//				beforerender : this.beforerender
			}
		});
	},
	beforerender : function(){
	
	        Ext.Ajax.request({/*
			url :  "mt4sinsurename/listallinsurename",
			success : function(response) {
				var temp = Ext.JSON.decode(response.responseText);
				//['id','insureName','isForce','maintain4sId']   mt4sVehicleInsureHis.insureNameId
				var checkItem = new Array(temp.length);
				for ( var i = 0; i < temp.length; i++) {
					var d = temp[i];
					checkItem[i] = {
						boxLabel : d.insureName,
						name : 'insureNameIds',
						inputValue : d.id
					};
				}
				selectitems = checkItem;
				selectitemsByCode = checkItem;
			}
			*/});
	  
	}
	

});
