/**
 * 修改保养信息的窗口
 */
Ext.define('app.view.biz.transbillmanage.edit.Window', {
	extend : 'Ext.window.Window',
	alias : 'widget.edittransbillwindow',
	title : "修改运单信息",
	width : 1000,
	height : 400,
	autoScroll : true,
	closeAction : "close",// 使关闭模式为隐藏（hide）
	modal : true,
	items : [ {
		xtype : 'edittransbillform'
	} ],
	buttons : [ {
		text : "确 定",
		action : 'ok'
	}, {
		text : "关 闭",
		action : 'close'
	} ]

});
