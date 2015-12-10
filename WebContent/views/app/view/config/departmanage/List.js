Ext.define('app.view.config.departmanage.List', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.departmanagelist',
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
			tbar : [{
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
						fieldLabel : '部门名称:',
						labelWidth : 60,
						width : 160,
						// allowBlank : false,
						// blankText : "搜索类型不能为空！",
						// name:"searchType",
						id : 'departSearch',
						emptyText : '全部',
						xtype : 'combo',
						displayField : 'name',
						valueField : 'id',
						hiddenName : 'searchType',
						forceSelection : true,
						value : 'id',
						triggerAction : 'all',
						editable : false,
						mode : 'local',
						store : 'app.store.config.departmanage.DepartSimpleInfoStore'
					}, {
						xtype : 'button',
						action : 'search',
						text : '搜索',
						iconCls : 'search'
					}],
			initComponent : function() {// 用到继承，一般都会初始化这个函数
				this.store = 'app.store.config.departmanage.Store', this.columns = [
						{
							header : "id",
							dataIndex : "id",
							align : "center",
							hidden : true
						}, {
							header : "部门代码",
							dataIndex : "departNum"
						}, {
							header : "部门名称",
							dataIndex : "name"
						}, {
							header : '部门描述',
							dataIndex : 'description'
						}],
				// paging bar on the bottom
				this.bbar = Ext.create('Ext.PagingToolbar', {
							id : 'departmentmanagepaggingbar',
							store : this.store,
							displayInfo : true,
							displayMsg : '当前显示 {0} - {1}条记录, 总共 {2}条记录',
							emptyMsg : "当前没有数据显示"
						});
				this.callParent(arguments);

			}
		});