/**
 * 修改保养信息窗口里的表单页面
 */
Ext.define('app.view.rightpanel.loginfomanage.edit.Edit', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.editloginfoform',
	baseCls : "x-plain",// 应用容器控件背景颜色
	labelWidth : 80,
	defaults : {
		anchor : "80%"
	}, // 使用锚点布局设置缺省控件宽度
	items : [ {
		xtype : 'textfield',
		style : {
			display : 'none'
		},
		name : 'id'
	}, {
		xtype : 'textfield',
		fieldLabel : "登录名",
		name : 'name',
		width : 100,
		disabled : true,
		minChars : 0,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		inputType : 'password',
		fieldLabel : "新密码",
		name : 'newPassword',
		allowBlank : false,
		width : 100,
		maxLength: 64,
		minChars : 6,
		style : 'margin:20px 5px 0px;'
	} ],
	autoScroll : true,
	monitorValid : true,

	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.callParent(arguments);
	}

});