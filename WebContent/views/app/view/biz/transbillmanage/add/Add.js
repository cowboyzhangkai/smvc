/**
 * 添加保养信息窗口里的表单view
 */
Ext.define('app.view.biz.transbillmanage.add.Add', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.addtransbillform',
	baseCls : "",// 应用容器控件背景颜色
	defaults : {
		anchor : "100%"
	},
	// 使用锚点布局设置缺省控件宽度
	items : [ {
		layout : 'form',
		items : [ {
				xtype : 'textfield',
				fieldLabel : "运单号",
				name : 'billNo',
				width : 400,
				allowBlank : false
		}, {
			layout : 'column',
			items : [ {
				xtype : 'datefield',
				fieldLabel : "托运日期",
				name : 'transTime',
				format : 'Y-m-d h:i:s',
				selectOnFocus : true,
				editable : false
			}, {
				xtype : 'textfield',
				fieldLabel : "&nbsp;起运地点",
				name : 'fromStation',
				allowBlank : false
			}, {
				xtype : 'textfield',
				fieldLabel : "&nbsp;到站",
				name : 'toStation',
				allowBlank : false
			} ]
		}, {
			xtype : 'textfield',
			fieldLabel : "托运单位（人）",
			name : 'transCompany',
			width : 400,
			allowBlank : false
		}, {
			layout : 'column',
			items : [ {
				xtype : 'textfield',
				fieldLabel : "收货单位（人）",
				allowBlank : false
			}, {
				xtype : 'textfield',
				fieldLabel : "&nbsp;收货方电话",
				name : 'destTel',
				allowBlank : false
			}, {
				xtype : 'textfield',
				fieldLabel : "&nbsp;手机",
				name : 'destPhone',
				allowBlank : false
			} ]
		}, {
			layout : 'column',
			items : [ {
				xtype : 'textfield',
				fieldLabel : "收货地址",
				name : 'destAddress',
				width : 505,
				allowBlank : false
			}, {
				xtype : 'textfield',
				fieldLabel : "&nbsp;交付方式",
				name : 'payType',
				allowBlank : false
			} ]
		} ]
	} ],
	autoScroll : true,
	monitorValid : true,

	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.callParent(arguments);
	}

});