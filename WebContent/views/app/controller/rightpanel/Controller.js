Ext.define('app.controller.rightpanel.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.rightpanel.RightPanel', 'app.view.rightpanel.HomePanel','app.view.rightpanel.loginfomanage.edit.Edit'],
	stores : [],
	models : [],
	init : function() {
		this.control({
					'homepanel monthfield' : {
						//change : this.change
					},
					'rightpanel #pwdMenu' :{
						click : this.changePwd
					},
					'editloginfowindow button[action=ok]' : {
						// 向后台请求添加用户的请求操作
						click : this.doChangePwd
					},
					'editloginfowindow button[action=close]' : {
						// 关闭添加信息窗口
						click : this.closeEditWindow
					}
				});

	},
	//打开修改界面
	changePwd : function(){
		if (!Ext.ComponentQuery.query("editloginfoform")[0]) {
			Ext.create("app.view.rightpanel.loginfomanage.edit.Window", {}).show();
		} else if (Ext.ComponentQuery.query("editloginfowindow")[0].isHidden()) {
			Ext.ComponentQuery.query("editloginfowindow")[0].show();
		}
		var loginInfo=Security.getLoginUser();
		Ext.ComponentQuery.query("editloginfoform")[0].getForm().setValues([{
			id : 'id',
			value : loginInfo.id
		}, {
			id : 'name',
			value : loginInfo.name
		}, {
			id : 'newPassword',
			value : ''
		}]);
	},
	//执行修改
	doChangePwd : function(){
		var _url='../sys/changePassword';
		Ext.ComponentQuery.query("editloginfoform")[0].getForm().submit({ // 进行AJAX请求
			waitMsg : "数据保存中...",
			url : _url,
			success : function(form, response) { // 当success为true时执行的回调函数
				var temp = response.result;
				Ext.Msg.alert("系统提示", temp.msg);
				if (temp.success) {
					var win = Ext.ComponentQuery.query("editloginfowindow")[0];
					win.close();
					return true;
				} else {
					return false;
				}
			},
			failure : function(form, response) { // 当success为false时执行的回调函数
				var temp = false;
				if (response.result) {
					temp = response.result;
				} else {
					temp = {
						'msg' : '请确保填写所有必填信息'
					};
				}
				Ext.Msg.alert("系统提示", temp.msg);
				return false;
			}
		});
	},
	/**
	 * 关闭修改信息窗口界面
	 */
	closeEditWindow : function() {
		var win = Ext.ComponentQuery.query("editloginfowindow")[0];
		win.close();
	},

	/**
	 * **id：新建tab的id type：新建tab里面嵌套的view name：Title
	 */
	addTab : function(id, type, name) {
		if (Ext.getCmp("rightpanel").getComponent(id)) {
			Ext.getCmp("rightpanel").remove(id);
		}
		Ext.getCmp("rightpanel").add({
			title : name,
			id : id,
			xtype : 'panel',
			border : false,
			layout : 'anchor',
			items : [{
				xtype : 'panel',
				anchor : '100% 10%',
				border : false,
				height : 50,
				bodyCls : 'x-accordion-hd',
				// html : '<font class="x-header-text">' + name + '</font>',
				html : '<div style="color: #000;font-weight:bold; line-height: 160%; padding: 0.3em 0.3em; border: 0px solid #d3d3d3; margin: 1em; background-color: #aad2f0; border-radius: 3px 3px 3px 3px;">'
						+ name + '</div>'
			}, {
				xtype : type,
				anchor : '100% 90%',
				bodyStyle : {
					padding : '5 5 5 5'
				}
			}],
			closable : true
		});
		Ext.getCmp("rightpanel").setActiveTab(id);
	}
});