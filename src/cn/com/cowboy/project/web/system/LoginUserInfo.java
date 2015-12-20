/**
 *  <b>日期：</b>18 Sep, 2014-2:23:34 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.web.system;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.SecurityHelper;

/**
 * <b>类名称：</b>LoginUserInfo<br/>
 * <b>类描述：</b>获取登录用户信息的接口<br/>
 * <b>创建时间：</b>18 Sep, 2014 2:23:34 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author cowboy <br />
 * @version 1.0.0 <br/>
 */
@RestController
@Scope("prototype")
@RequestMapping("/sys")
public class LoginUserInfo
{

	private Log logger = LogFactory.getLog(getClass());

	@Resource
	private UserBus userBus;

	/**
	 * <p>
	 * 获取登录用户信息和权限
	 * </p>
	 */
	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	public UserInfo userInfo()
	{
		String loginUsername = SecurityHelper.getLoginUsername();
		logger.debug("loginUsername: " + loginUsername);
		return generateUserInfo(loginUsername);
	}

	/**
	 * <p>
	 * 构造UserInfo
	 * </p>
	 *
	 * @param username
	 *            登录用户
	 * @return UserInfo
	 */
	private UserInfo generateUserInfo(String username)
	{
		Users user = userBus.findByName(username);
		return new UserInfo(user);
	}

	public class UserInfo
	{
		private final User user;

		// private final List<Privilege> privileges;
		public UserInfo(Users user)
		{
			super();
			this.user = new User(user);
		}

		/**
		 * user
		 *
		 * @return the user
		 */
		public User getUser()
		{
			return user;
		}
	}

	public class User
	{
		private final String id;
		private final String name;
		private final String cnName;
		private final String phone;

		public User(Users user)
		{
			super();
			this.id = user.getId();
			this.name = user.getName();
			this.cnName = user.getCnName();
			this.phone = user.getPhone();
		}

		/**
		 * id
		 *
		 * @return the id
		 */
		public String getId()
		{
			return id;
		}

		/**
		 * name
		 *
		 * @return the name
		 */
		public String getName()
		{
			return name;
		}

		/**
		 * cnName
		 *
		 * @return the cnName
		 */
		public String getCnName()
		{
			return cnName;
		}

		/**
		 * phone
		 * 
		 * @return the phone
		 */
		public String getPhone()
		{
			return phone;
		}
	}
}
