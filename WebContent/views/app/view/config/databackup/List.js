Ext.define('app.view.config.databackup.List', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.databackuplist',
			frame : false,// 面板渲染
			// selType : 'checkboxmodel',// 设定选择模式
			// multiSelect : true,// 运行多选
			enableColumnHide : false,// /隐藏列
			sortableColumns : false,// /隐藏排序
			border : false,
			viewConfig : {
				forceFit : true, // 注意不要用autoFill:true,那样设置的话当GridPanel的大小变化（比如你resize了它）时不会自动调整column的宽度
				scrollOffset : 0
				// 不加这个的话，会在grid的最右边有个空白，留作滚动条的位置
			},
			columnLines : true,// 显示列的分割线
			tbar : ['->',{
						xtype : 'button',
						action : 'backup',
						text : "备份",
						iconCls : ''
					}],
			initComponent : function() {// 用到继承，一般都会初始化这个函数
				this.store = 'app.store.config.databackup.Store', this.columns = [{
							header : "id",
							dataIndex : "id",
							align : "center",
							flex : 1,
							hidden : true
						}, {
							header : "备份文件路径",
							flex : 2,
							align : "center",
							dataIndex : "url"
						}, {
							header : "备份日期",
							align : "center",
							flex : 1,
							dataIndex : "date"
						}, {
							header : "备份人",
							align : "center",
							flex : 1,
							dataIndex : "user.username"
						}],
				// paging bar on the bottom
				this.bbar = Ext.create('Ext.PagingToolbar', {
							id : 'databackupPagingToolbarId',
							store : this.store,
							displayInfo : true,
							displayMsg : '当前显示 {0} - {1}条记录, 总共 {2}条记录',
							emptyMsg : "当前没有数据显示"
						});
				this.callParent(arguments);

			}
		});