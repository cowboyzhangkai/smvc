Ext.define('app.view.config.usermanage.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.usermanagelist',
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
		fieldLabel : '用户姓名:',
		xtype : 'textfield',
		labelWidth : 60,
		width : 145,
		id : 'cnName',
		name : 'cnName',
		blankText : '输入姓名',
		emptyText : '输入姓名'
	}, {
		xtype : 'button',
		action : 'search',
		text : '搜索',
		iconCls : 'search'
	} ],
	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.store = 'app.store.config.usermanage.Store', this.columns = [ {
			header : "id",
			dataIndex : "id",
			hidden : true,
			align : "center"
		}, {
			header : "序号",
			xtype : "rownumberer",
			width:50
		}, {
			header : "账号",
			dataIndex : "name",
			width:330
		}, {
			header : "姓名",
			dataIndex : "cnName",
			width:330
		}, {
			header : "所属部门",
			dataIndex : "department.name",
			width:330
		} ],
		// paging bar on the bottom
		this.bbar = Ext.create('Ext.PagingToolbar', {
			id : 'userManagerPagingToolbarId',
			store : this.store,
			displayInfo : true,
			displayMsg : '当前显示 {0} - {1}条记录, 总共 {2}条记录',
			emptyMsg : "当前没有数据显示"
		});
		this.callParent(arguments);
	}
});