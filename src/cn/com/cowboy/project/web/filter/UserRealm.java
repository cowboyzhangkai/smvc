package cn.com.cowboy.project.web.filter;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.MD5Utils;

public class UserRealm extends AuthorizingRealm
{
	@Resource
	private UserBus userBus;
	private final Log logger = LogFactory.getLog(getClass());

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalcollection)
	{
		// String username = (String) principalcollection.getPrimaryPrincipal();
		// if (!Strings.isNullOrEmpty(username)) {
		// SimpleAuthorizationInfo authenticationInfo = new
		// SimpleAuthorizationInfo();
		// Users users = userBus.findByUserLoginName(username);
		// authenticationInfo.setRoles(userBus.findRolesStr(username));
		// authenticationInfo.setStringPermissions(userBus
		// .findPermissionsStr(users));
		// return authenticationInfo;
		// }
		return null;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken paramAuthenticationToken)
			throws AuthenticationException
	{
		UsernamePasswordToken usernamePasswordToken = (UsernamePasswordToken) paramAuthenticationToken;
		String p = new String(usernamePasswordToken.getPassword());
		p = MD5Utils.encode(p);
		usernamePasswordToken.setPassword(p.toCharArray());
		String username = String.valueOf(usernamePasswordToken.getUsername());
		Users user = userBus.findByName(username);
		AuthenticationInfo authenticationInfo = null;
		if (user != null)
		{
			if (user.getPassword().equals(p))
			{
				authenticationInfo = new SimpleAuthenticationInfo(user.getName(), user.getPassword(), getName());
				return authenticationInfo;
			} else
			{
				return null;
			}
		}
		return null;
	}
}
