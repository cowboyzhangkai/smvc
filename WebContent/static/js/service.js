/*------------------------------|
| Service Config | 			  	|
|-------------------------------|
| @author Kenny Lee	            |
|-------------------------------|
| 描述：远程接口配置文件	            |
| !!!注意加载顺序!!!				|
| 必须在其他model加载完成后才执行此文件|
|------------------------------*/
var SysConfig = (function(model) {
	model.url.userInfo = SysHelper.gLink('/sys/userInfo');
	model.url.logout = SysConfig.url.base + '/logout';
	model.url.login = SysConfig.url.base + '/login.html';
	return model;
}(SysConfig));

/*
 * 配置菜单的访问权限。@param selector 为A标签的菜单id @param role 为相应拥有的权限。
 */
var TreeMenuConfig = [ {
	selector : '#user_manager',
	role : 'user:read'
} ];

var UserModel = (function(model) {
	/*
	 * key值为form表单里面的input等name，value为远程JSON接口参数对应的名字。
	 */
	model.prototype.fieldMap = {
		id : 'id',
		loginName : 'name',
		displayName : 'cnName',
		password : 'password',
		phoneNo : 'phone',
		gender : 'gender',
		createTime : 'createTime',
		mobileNo : 'mobile',
		position : 'position',
		isActive : 'isActive'
	},
	/*
	 * 配置远程接口的URL地址列表，可控制访问权限。
	 */
	model.prototype.urls = {
		list : Security.hasAnyGranted('user:read') ? SysHelper
				.gLink('/user/list') : '',
		save : Security.hasAnyGranted('user:create') ? SysHelper
				.gLink('/user/create') : '',
		edit : Security.hasAnyGranted('user:update') ? SysHelper
				.gLink('/user/update') : '',
		remove : Security.hasAnyGranted('user:delete') ? SysHelper
				.gLink('/user/remove') : ''
	};
	return model;
}(UserModel));