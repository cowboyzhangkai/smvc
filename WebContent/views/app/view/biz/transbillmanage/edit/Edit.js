/**
 * 修改保养信息窗口里的表单页面
 */
Ext.define('app.view.biz.transbillmanage.edit.Edit', {
	extend : 'Ext.form.FormPanel',
	alias : 'widget.edittransbillform',
	requires : [ 'app.utils.DateTimeField' ],
	labelWidth : 80,
	defaults : {
		anchor : "99%"
	}, // 使用锚点布局设置缺省控件宽度
	items : [ {
		layout : 'form',
		items : [ {
			xtype : 'textfield',
			style : {
				display : 'none'
			},
			name : 'id'
		}, {
			xtype : 'textfield',
			fieldLabel : "运单号",
			name : 'billNo',
			width : 400,
			allowBlank : false
		}, {
			layout : 'column',
			border : '0px solid #666',
			items : [ {
				xtype : 'datetimefield',
				fieldLabel : "托运日期",
				name : 'transTime',
				selectOnFocus : true,
				width : 250,
				format : 'Y-m-d H:i:s'
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