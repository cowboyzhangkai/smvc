Ext.define('app.view.biz.transbillmanage.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.transbillmanagelist',
	frame : false,// 面板渲染
	selType : 'checkboxmodel',// 设定选择模式
	multiSelect : true,// 运行多选
	enableColumnHide : false,// /隐藏列
	sortableColumns : false,// /隐藏排序
	border : false,
	viewConfig : {
		forceFit : true, // 注意不要用autoFill:true,那样设置的话当GridPanel的大小变化（比如你resize了它）时不会自动调整column的宽度
		scrollOffset : 0
	// 不加这个的话，会在grid的最右边有个空白，留作滚动条的位置
	},
	columnLines : true,// 显示列的分割线
	tbar : [ {
		xtype : 'button',
		action : 'add',
		text : "添加",
		iconCls : 'add'
	}, "-", {
		xtype : 'button',
		action : 'update',
		text : "修改",
		iconCls : 'edit'
	}, "-", {
		xtype : 'button',
		action : 'delete',
		text : "删除",
		iconCls : 'delete'
	}, '->', {
		fieldLabel : '运单号:',
		xtype : 'textfield',
		labelWidth : 60,
		width : 145,
		id : 'billNo',
		name : 'billNo',
		blankText : '输入运单号',
		emptyText : '输入运单号'
	}, {
		xtype : 'button',
		action : 'search',
		text : '搜索',
		iconCls : 'search'
	} ],
	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.store = 'app.store.biz.transbillmanage.Store', this.columns = [ {
			header : "id",
			dataIndex : "id",
			hidden : true,
			align : "center"
		}, {
			header : "运单号",
			dataIndex : "billNo",
		}, {
			header : "托运日期",
			dataIndex : "transTime"
		}, {
			header : "到厂装货时间",
			dataIndex : "loadGoodsPoint"
		}, {
			header : "运往目的地",
			dataIndex : "dest"
		}, {
			header : "托运人/公司/工厂",
			dataIndex : "company"
		}, {
			header : "联系人",
			dataIndex : "contractor"
		}, {
			header : "联系电话",
			dataIndex : "contractPhone"
		}, {
			header : "托运公司地址",
			dataIndex : "address"
		} ],
		// paging bar on the bottom
		this.bbar = Ext.create('Ext.PagingToolbar', {
			id : 'transbillManagerPagingToolbarId',
			store : this.store,
			displayInfo : true,
			displayMsg : '当前显示 {0} - {1}条记录, 总共 {2}条记录',
			emptyMsg : "当前没有数据显示"
		});
		this.callParent(arguments);
	}
});