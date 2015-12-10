/*******************************************************************************
 * 顶部容器视图
 */
Ext.define('app.view.headpanel.HeadPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.headpanel',
	id : 'headpanel',
	layout : 'border',
	height : 110,
	border : false,
	items : [{
				xtype : 'aboutpanel',
				id : 'HeadPanelImage',
				//html : 'Loding......',
				region : 'center',
				border : 0,
				bodyStyle : {
					background : '#1A56A8'
				}
			},
				{
				xtype : 'indextoolbar',
				region : 'south'
			}],
	initComponent : function() {
		this.callParent(arguments);
		/*
		

		var strPic = basePath + '/images/tdx.png';
		if (teaminfo.data[0].avatar != null)
			strPic = basePath + teaminfo.data[0].avatar.replace(/\\/g, '/');
		Ext.getCmp('HeadPanelImage').html = '<td><div style="float:right;color:white;">| <a href="javascript:void(0)" onclick="clickme()"><font color="">'
				+ userinfo.userName
				+ '</font></a> | <a href="javascript:void(0)" onclick="clickhere()">关于天地行</a><br/> <img src="'
				+ basePath
				+ '/images/tdx1.png" width="67" height="32" style="margin-top: 5;margin-left:40;"></div> <div style="float :left;"><img src="'
				+ strPic
				+ '" height="50" style="margin-left:10;margin-top: 5;"id="4sImage"><font size="4" color="white" style="margin-left:10px;margin-bottom:10;vertical-align:bottom" face="Microsoft YaHei">4S售后服务平台</font>'
				+ '<font size="4" color="#12BBFC" face="Microsoft YaHei" style="margin-left:3px;vertical-align:bottom">2.0</font></div></td>';
	*/}
});
