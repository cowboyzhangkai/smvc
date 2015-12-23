package cn.com.cowboy.project.web.filter;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.PasswordUtils;

public class UserRealm extends AuthorizingRealm
{
	@Resource
	private UserBus userBus;

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
	{
		UsernamePasswordCaptchaToken token = (UsernamePasswordCaptchaToken) paramAuthenticationToken;
		String username = String.valueOf(token.getUsername());
		String p = new String(token.getPassword());
		Users user = userBus.findByName(username);
		p = PasswordUtils.encryptPassword(user, p);
		token.setPassword(p.toCharArray());
		AuthenticationInfo authenticationInfo = null;
		// 增加判断验证码逻辑
		String captcha = token.getCaptcha();
		String exitCode = (String) SecurityUtils.getSubject().getSession().getAttribute(CaptchaFilter.KEY_CAPTCHA);
		if (null == captcha || !captcha.equalsIgnoreCase(exitCode))
		{
			throw new AuthenticationException("验证码错误");
		}

		if (user != null)
		{
			authenticationInfo = new SimpleAuthenticationInfo(user.getName(), user.getPassword(), getName());
			return authenticationInfo;
		}
		return null;
	}
}
