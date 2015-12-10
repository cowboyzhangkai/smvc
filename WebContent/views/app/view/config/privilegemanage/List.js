Ext.define('app.view.config.privilegemanage.List', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.privilegemanagelist',
			layout : 'border',

			tbar : [{
						xtype : 'button',
						action : 'addrole',
						text : "添加角色",
						scope : this,
						iconCls : 'add'
					}/*
						 * , { xtype : 'button', action :
						 * 'addprivilegefunctiongroup', text : "添加权限功能组", scope :
						 * this, iconCls : 'add' }
						 */, {
						xtype : 'button',
						action : 'deleterole',
						text : "删除角色",
						scope : this,
						iconCls : 'delete'
					}/*
						 * , { xtype : 'button', action :
						 * 'deleteprivilegefunctiongroup', text : "删除权限功能组",
						 * scope : this, iconCls : 'delete' }
						 */],

			items : [{
						id : 'privilegeleftlistItemsId',
						xtype : 'privilegemanageleftlist',
						width : 260,
						region : 'west'
					}, {
						xtype : 'privilegemanagerightlist',
						region : 'center'
					}]
		});