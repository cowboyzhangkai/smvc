/**
 * 添加保养信息窗口里的表单view
 */
Ext.define('app.view.biz.transbillmanage.add.Add', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.addtransbillform',
	baseCls : "",// 应用容器控件背景颜色
	defaults : {
		anchor : "80%"
	}, // 使用锚点布局设置缺省控件宽度
	items : [ {
		xtype : 'textfield',
		fieldLabel : "运单号",
		name : 'billNo',
		width : 100,
		allowBlank : false,
		minChars : 0,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		fieldLabel : "托运日期",
		name : 'transTime',
		allowBlank : true,
		width : 100,
		minChars : 0,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		fieldLabel : "到厂装货时间",
		name : 'loadGoodsPoint',
		width : 100,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		fieldLabel : "目的地",
		name : 'dest',
		width : 100,
		minChars : 6,
		style : 'margin:20px 5px 0px;'
	} ],
	autoScroll : true,
	monitorValid : true,

	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.callParent(arguments);
	}

});