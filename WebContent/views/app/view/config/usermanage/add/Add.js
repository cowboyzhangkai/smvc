/**
 * 添加保养信息窗口里的表单view
 */
Ext.define('app.view.config.usermanage.add.Add', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.adduserform',
	baseCls : "",// 应用容器控件背景颜色
	defaults : {
		anchor : "80%"
	}, // 使用锚点布局设置缺省控件宽度
	items : [ {
		xtype : 'textfield',
		fieldLabel : "登录名",
		name : 'name',
		width : 100,
		allowBlank : false,
		minChars : 0,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		fieldLabel : "中文名",
		name : 'cnName',
		allowBlank : true,
		width : 100,
		minChars : 0,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		inputType : 'password',
		fieldLabel : "密码",
		name : 'password',
		allowBlank : false,
		width : 100,
		minChars : 6,
		style : 'margin:20px 5px 0px;'
	}, {
		xtype : 'textfield',
		inputType : 'password',
		fieldLabel : "确认密码",
		name : 'password2',
		allowBlank : false,
		width : 100,
		minChars : 6,
		style : 'margin:20px 5px 0px;'
	}

	// , {
	// fieldLabel : "部门",
	// allowBlank : false,
	// blankText : "不能为空！",// 为空时显示的提示信息
	// xtype : 'combo',
	// displayField : 'name',
	// valueField : 'id',
	// hiddenName : 'searchType',
	// forceSelection : true,
	// value : 'id',
	// triggerAction : 'all',
	// editable : false,
	// mode : 'local',
	// store : 'TDX.store.config.usermanage.AllDepartSimpleInfoStore',
	// name : "departmentId" // name属性一定要与服务器端定义的Request["brname"]一致，不然服务器端得不到数据
	// }, {
	// fieldLabel : "角色",
	// allowBlank : false,
	// blankText : "不能为空！",// 为空时显示的提示信息
	// xtype : 'combo',
	// displayField : 'name',
	// valueField : 'id',
	// hiddenName : 'searchType',
	// forceSelection : true,
	// value : 'id',
	// triggerAction : 'all',
	// editable : false,
	// mode : 'local',
	// store : 'TDX.store.config.usermanage.AllRoleStore',
	// name : "roleId" // name属性一定要与服务器端定义的Request["brname"]一致，不然服务器端得不到数据
	// }
	],
	autoScroll : true,
	monitorValid : true,

	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.callParent(arguments);
	}

});