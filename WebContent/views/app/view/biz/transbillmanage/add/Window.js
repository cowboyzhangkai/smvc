/**
 * 添加保养信息的窗口(用于包含保养信息panel
 */
Ext.define('app.view.biz.transbillmanage.add.Window', {
	extend : 'Ext.window.Window',
	alias : 'widget.addtransbillwindow',
	title : "添加运单信息",
	width : 1000,
	height : 400,
	// renderTo:'maintainmanage',
	autoScroll : true,
	closeAction : "hide",// 使关闭模式为隐藏（hide）
	modal : true,
	items : [ {
		xtype : 'addtransbillform'
	} ],
	buttons : [ {
		text : "确 定",
		action : 'ok'
	}, {
		text : "关 闭",
		action : 'close'
	} ]

});
