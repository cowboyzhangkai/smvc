Ext.define('app.view.headpanel.Panel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.aboutpanel',
	id : 'aboutpanel',
	layout : 'border',
	height : 72,
	/*border : false,
	
	  layoutConfig : { columns : 3 //设置表格布局默认列数为4列
		  },
	 */
	// applyTo :'panel',
	items : [
	/*
	 * {title:'子面板三',width:200,region:'left'}, {title:'子面板四',width:500},
	 * {title:'子面板五',width:500,region:'right'}
	 */
	{
		xtype : 'panel',
		// html : 'Lodasing......',
		// id : 'logoImage',
		 region : 'west',
		width : 80,
		height : 70,
		border : 0,
		bodyStyle : {
			margin: '7 5 7 15',
			background : 'url(images/cust_logo.png) no-repeat #1A56A8'
		}
	},{
		xtype : 'panel',
		region : 'center',
		width : 1050,
		height : 70,
		border : 0,
		bodyStyle : {
			margin: '17 10 10 5',
			background : 'url(images/cust_name.png) no-repeat #1A56A8'
		}
	},{
		xtype : 'panel',
		// html : 'Lodasing......',
		// id : 'logoImage',
		region : 'east',
		width : 280,
		height : 70,
		border : 0,
		bodyStyle : {
			float:'right',
			background : 'url(images/head_bg.png) no-repeat #1A56A8'
		}
	}
	

	],
	/*
	 * autoLoad:{ url : basePath + '/tdx/AboutUs.html' },
	 */
	// border : false,
	initComponent : function() {
		this.callParent(arguments);
	}
});
