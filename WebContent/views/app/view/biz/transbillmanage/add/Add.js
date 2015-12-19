/**
 * 添加保养信息窗口里的表单view
 */
Ext.define('app.view.biz.transbillmanage.add.Add', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.addtransbillform',
	baseCls : "",// 应用容器控件背景颜色
	defaults : {
		anchor : "99%"
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
			border : '0px solid #666',
			items : [ {
				xtype : 'datefield',
				fieldLabel : "托运日期",
				name : 'transTime',
				format : 'Y-m-d H:i:s',
				selectOnFocus : true,
				editable : false,
				allowBlank : false
			}, {
				xtype : 'textfield',
				labelWidth : 60,
				fieldLabel : "起运地点",
				name : 'fromStation',
				labelAlign : "right",
				width : 350,
				allowBlank : false
			}, {
				xtype : 'textfield',
				labelWidth : 60,
				fieldLabel : "到    站",
				name : 'toStation',
				labelAlign : "right",
				width : 350,
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
				name : 'destCompany',
				allowBlank : false
			}, {
				xtype : 'textfield',
				labelWidth : 60,
				fieldLabel : "收货电话",
				name : 'destTel',
				labelAlign : "right",
				width : 350,
				allowBlank : false
			}, {
				xtype : 'textfield',
				labelWidth : 60,
				fieldLabel : "手    机",
				name : 'destPhone',
				labelAlign : "right",
				width : 350,
				allowBlank : false
			} ]
		}, {
			layout : 'column',
			items : [ {
				xtype : 'textfield',
				fieldLabel : "收货地址",
				name : 'destAddress',
				width : 750,
				allowBlank : false
			}, {
				xtype : 'textfield',
				fieldLabel : "交付方式",
				name : 'payType',
				labelWidth : 60,
				labelAlign : "right"
			} ]
		} ]
	} ],
	autoScroll : true,
	monitorValid : true,

	initComponent : function() {// 用到继承，一般都会初始化这个函数
		this.callParent(arguments);
	}

});