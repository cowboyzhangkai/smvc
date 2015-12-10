Ext.define('app.controller.rightmenu.Controller', {
	extend : 'Ext.app.Controller',
	views : ['app.view.rightmenu.RightMenu',
			'app.view.rightmenu.FinishTimeLimitMenu',
			'app.view.rightmenu.BeyondTimeNotFinishMenu',
			'app.view.rightmenu.ArchiveMenu'],
	stores : ['app.store.rightmenu.FinishTimeLimitMenuStore',
			'app.store.rightmenu.BeyondTimeNotFinishMenuStore',
			'app.store.rightmenu.ArchiveMenuStore'],
	models : ['app.model.rightmenu.FinishTimeLimitMenuModel',
			'app.model.rightmenu.BeyondTimeNotFinishMenuModel',
			'app.model.rightmenu.ArchiveMenuModel'],
	init : function() {
		this.control({
					'finishtimelimitmenu' : {
						// 完成时限菜单项点击事件
						itemclick : this.finishtimelimitmenuitemclick
					},
					'beyondtimenotfinishmenu' : {
						// 超时未完成菜单项点击事件
						itemclick : this.beyondtimenotfinishmenuitemclick
					},
					'archivemenu' : {
						// 归档菜单项点击事件
						itemclick : this.archivemenuitemclick
					},
					'rightmenu > panel' : {
						expand : this.expand
					},
					'rightmenu' : {
						render : this.render
					}
				});
	},
	/**
	 * 完成时限菜单项点击事件
	 * 
	 * @param {}
	 *            view
	 * @param {}
	 *            record
	 * @param {}
	 *            item
	 * @param {}
	 *            rowIndex
	 * @param {}
	 *            e
	 */
	finishtimelimitmenuitemclick : function(view, record, item, rowIndex, e) {
		if (rowIndex == 0) {
			var self = this;
			alert("0");
			// if (!this.application.controllers
			// .get("app.controller.baseassessmentdata.personalmonthlyreport.Controller"))
			// {
			// Ext
			// .require(
			// "app.controller.baseassessmentdata.personalmonthlyreport.Controller",
			// function() {
			// application
			// .getController('app.controller.baseassessmentdata.personalmonthlyreport.Controller');
			// }, self);
			// } else {
			// newTab("personalmonthlyreport", "personalmonthlyreportlist",
			// "考核基础数据>个人月报表", "个人月报表");
			// }
		} else if (rowIndex == 1) {
			var self = this;
			alert("1");
		}
	},
	/**
	 * 超时未完成菜单项点击事件
	 * 
	 * @param {}
	 *            view
	 * @param {}
	 *            record
	 * @param {}
	 *            item
	 * @param {}
	 *            rowIndex
	 * @param {}
	 *            e
	 */
	beyondtimenotfinishmenuitemclick : function(view, record, item, rowIndex, e) {
		if (rowIndex == 0) {
			var self = this;
			alert("0");
		} else if (rowIndex == 1) {
			var self = this;
			alert("1");
		}
	},
	/**
	 * 归档菜单项点击事件
	 * 
	 * @param {}
	 *            view
	 * @param {}
	 *            record
	 * @param {}
	 *            item
	 * @param {}
	 *            rowIndex
	 * @param {}
	 *            e
	 */
	archivemenuitemclick : function(view, record, item, rowIndex, e) {
		if (rowIndex == 0) {
			var self = this;
			alert("0");
		} else if (rowIndex == 1) {
			var self = this;
			alert("1");
		}
	},
	render : function() {

	},
	expand : function(p) {
		if (p.getId() == "maintainpanel") {
			Ext.data.StoreManager
					.lookup('app.store.leftmenu.MaintainMenuStore').reload();
		}
	},
	/**
	 * 
	 * @param {}
	 *            id 新建tab的id
	 * @param {}
	 *            type 新建tab里面嵌套的view
	 * @param {}
	 *            record 点击的菜单名
	 * @param {}
	 *            name 在record中的字段名
	 */
	addTab : function(id, type, record, name) {
		if (!Ext.getCmp("rightpanel").getComponent(id)) {
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
					// 556677
					html : '<div style="color: #000;font-weight:bold; line-height: 160%; padding: 0.3em 0.5em; border: 0px solid #d3d3d3; margin: 1em; background-color: #aad2f0; border-radius: 3px 3px 3px 3px;">'
							+ name + '</div>'
						// style : 'padding:0 20 10 20'
				}, {
					xtype : type,
					anchor : '100% 90%',
					style : 'padding:0 30 10 30 '
				}],
				closable : true
			});
		}
		Ext.getCmp("rightpanel").setActiveTab(id);
	}

});