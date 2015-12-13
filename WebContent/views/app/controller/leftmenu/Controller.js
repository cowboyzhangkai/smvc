Ext
		.define(
				'app.controller.leftmenu.Controller',
				{
					extend : 'Ext.app.Controller',
					views : [ 'app.view.leftmenu.LeftMenu',
							'app.view.leftmenu.UserManageMenu',
							'app.view.leftmenu.TransBillManageMenu'],
					stores : [ 'app.store.leftmenu.UserManageMenuStore',  'app.store.leftmenu.TransBillManageMenuStore'],
					models : [ 'app.model.leftmenu.UserManageMenuModel','app.model.leftmenu.TransBillManageMenuModel' ],
					init : function() {
						this.control({
							'usermanagemenu' : {
								itemclick : this.configitemclick
							},
							'leftmenu > panel' : {
								expand : this.expand
							},
							'leftmenu' : {
								render : this.render
							}
						});
					},
					render : function() {
						var usermanagemenu = Ext.getCmp("usermanagepanel");
						//checkPrivilege(usermanagemenu, 5);
						Ext.getBody().unmask();

					},
					expand : function(p) {
						if (p.getId() == "maintainpanel") {
							Ext.data.StoreManager.lookup(
									'app.store.leftmenu.MaintainMenuStore')
									.reload();
						}
					},

					// 系统设置菜单单击事件
					configitemclick : function(view, record, item, rowIndex, e) {
						if (rowIndex == 0) {
							var self = this;
							if (!this.application.controllers
									.get("app.controller.config.usermanage.Controller")) {
								Ext
										.require(
												"app.controller.config.usermanage.Controller",
												function() {
													application
															.getController('app.controller.config.usermanage.Controller');
												}, self);
							} else {
								newTab("usermanagelist", "usermanagelist","系统管理>人员管理", "人员管理");
							}
						} else if (rowIndex == 1) {
							var self = this;
//							if (!this.application.controllers
//									.get("app.controller.config.departmanage.Controller")) {
//								Ext
//										.require(
//												"app.controller.config.departmanage.Controller",
//												function() {
//													application
//															.getController('app.controller.config.departmanage.Controller');
//												}, self);
//							} else {
//								newTab("departmanagelist", "departmanagelist",
//										"系统管理>部门管理", "部门管理");
//								this.addTab("departmanagelist", "departmanagelist","系统管理>部门管理", "部门管理");
//							}

						} else if (rowIndex == 2) {
							var self = this;
							if (!this.application.controllers
									.get("app.controller.config.privilegemanage.Controller")) {
								Ext
										.require(
												"app.controller.config.privilegemanage.Controller",
												function() {
													application
															.getController('app.controller.config.privilegemanage.Controller');
												}, self);
							} else {
								newTab("privilegemanagelist",
										"privilegemanagelist", "系统管理>权限管理",
										"权限管理");
							}
							// this.addTab("usermanagelist", "usermanagelist",
							// record,
							// record.data.userManageMenuName);

						} else if (rowIndex == 3) {
							var self = this;
							if (!this.application.controllers
									.get("app.controller.config.databackup.Controller")) {
								Ext
										.require(
												"app.controller.config.databackup.Controller",
												function() {
													application
															.getController('app.controller.config.databackup.Controller');
												}, self);
							} else {
								newTab("databackuplist", "databackuplist",
										"系统管理>数据备份", "数据备份");
							}

						}
						
					},
					/**
					 * **id：新建tab的id type：新建tab里面嵌套的view record：点击的菜单名字
					 * name：在record中的字段名
					 */
					addTab : function(id, type, record, name) {
						if (!Ext.getCmp("rightpanel").getComponent(id)) {
							Ext
									.getCmp("rightpanel")
									.add(
											{
												title : name,
												id : id,
												xtype : 'panel',
												border : false,
												layout : 'anchor',
												items : [
														{
															xtype : 'panel',
															anchor : '100% 10%',
															border : false,
															// 556677
															html : '<div style="color: #000;font-weight:bold; line-height: 160%; padding: 0.3em 0.5em; border: 0px solid #d3d3d3; margin: 1em; background-color: #aad2f0; border-radius: 3px 3px 3px 3px;">'
																	+ name
																	+ '</div>'
														// style : 'padding:0 20
														// 10 20'
														},
														{
															xtype : type,
															anchor : '100% 90%',
															style : 'padding:0 30 10 30 '
														} ],
												closable : true
											});
						}
						Ext.getCmp("rightpanel").setActiveTab(id);
					}

				});