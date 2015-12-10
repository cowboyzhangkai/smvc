/**
 * 所有js变量和外部函数
 * 
 * @type String
 */
var userinfo = "";
var teaminfo;
var box;
var application;

// role id
var roleId = "00";
var privilegestr = "";
// 选中的id的数组

function checkPrivilege(e, pCode) {
	if (privilegestr != "") {
		if (privilegestr.indexOf(pCode) >= 0) {
			e.show();
		} else {
			e.hide();
		}
	}
}
// 全选按钮事件
function onSelectAll() {
	var group = Ext.ComponentQuery.query("checkboxgroup")[0];
	var group = Ext.getCmp('checkboxgroup');
	var length = group.items.getCount();
	var all;
	if (this.checked == true) {
		all = true;
	} else {
		all = false;
	}
	for (i = 0; i < length; i++) {
		group.items.get(i).setValue(all);
	}
}
function delHtmlTag(str) {
	return str.replace(/<[^>]+>/g, "");// 去掉所有的html标记
}
function onSelectAll1() {
	var group = Ext.ComponentQuery.query("checkboxgroup")[0];
	var group = Ext.getCmp('checkboxgroup1');
	var length = group.items.getCount();
	var all;
	if (this.checked == true) {
		all = true;
	} else {
		all = false;
	}
	for (i = 0; i < length; i++) {
		group.items.get(i).setValue(all);
	}
}
/**
 * **id：新建tab的id type：新建tab里面嵌套的view record：点击的菜单名字 name：在record中的字段名
 * 此方法抽离出来会报错（暂时未解决）
 * 
 * function addTab(id, type, record, name) { if
 * (!Ext.getCmp("rightpanel").getComponent(id)) { Ext.getCmp("rightpanel").add({
 * title : name, id : id, xtype : 'panel', border : false, layout : 'anchor',
 * items : [{ xtype : 'panel', anchor : '100% 10%', border : false, //556677
 * html : '<div style="color: #000;font-weight:bold; line-height: 160%;
 * padding: 0.3em 0.5em; border: 0px solid #d3d3d3; margin: 1em;
 * background-color: #aad2f0; border-radius: 3px 3px 3px 3px;">' + name + '</div>' //
 * style : 'padding:0 20 10 20' }, { xtype : type, anchor : '100% 90%', style :
 * 'padding:0 30 10 30 ' }], closable : true }); }
 * Ext.getCmp("rightpanel").setActiveTab(id); }
 */
// 保存按钮事件
function onSave() {
	var group = Ext.ComponentQuery.query("checkboxgroup")[0];
	var group = Ext.getCmp('checkboxgroup');
	var length = group.items.getCount();
	var sltvalue = '';
	for (i = 0; i < length; i++) {
		if (group.items.get(i).checked == true) {
			sltvalue += ',' + group.items.get(i).inputValue;
		}
	}

	// Ext.getCmp('selectedshengfen').setValue(sltvalue.substring(1,sltvalue.length));
}
var selectitems = [];
var selectitemsByCode = [];

var looked = 'false';
var selectNumberPlate = "";

// 变换主题
var extjsStyleChangedSign = window.extjsStyleChangedSign || false;
function get_extjs_style_cookie() {
	var extjs_style_cookie = new Ext.state.CookieProvider({
				path : "/"
			});
	return extjs_style_cookie.get('extjs_style_cookie', 'ext-all.css');
}
var extjsStyleChangeTask = {
	run : function() {
		if (!extjsStyleChangedSign) {
			var style = get_extjs_style_cookie();
			var com = document.getElementById('extjs_style_link');
			if (!!com) {
				com.setAttribute('href', basePath + 'extjs/resources/css/'
								+ style);
			}
		}
	},
	interval : 1000
	// 1 seconds
};
function newTab(id, type, name1, name) {
	if (!Ext.getCmp("rightpanel").getComponent(id)) {
		Ext.getCmp("rightpanel").add({
			title : name,
			id : id,
			xtype : 'panel',
			border : false,
			layout : 'anchor',
			items : [{
				xtype : 'panel',
				anchor : '100% 5%',
				border : false
				// 556677
				
					// style : 'padding:0 20 10 20'
			}, {
				xtype : type,
				anchor : '100% 95%',
				style : 'padding:5 13 10 13'
			}],
			closable : true
		});
	}
	Ext.getCmp("rightpanel").setActiveTab(id);
}

function startAllTask() {
	// 修改extjs样式
	Ext.TaskManager.start(extjsStyleChangeTask);
}

function clickme() {
	var rightPanel = Ext.ComponentQuery.query("rightpanel")[0];
	this.addTab("updateuserinfo", "updateuserinfolist");
}

function clickhere() {
	if (!Ext.ComponentQuery.query("headpanelwindow")[0]) {
		Ext.create("TDX.view.headpanel.Window", {}).show();
	} else if (Ext.ComponentQuery.query("headpanelwindow")[0].isHidden()) {
		Ext.ComponentQuery.query("headpanelwindow")[0].show();
	}

}
