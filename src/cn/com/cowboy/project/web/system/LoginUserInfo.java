/**
 *  <b>日期：</b>18 Sep, 2014-2:23:34 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.web.system;

import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;

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
public class LoginUserInfo {

	private Log logger = LogFactory.getLog(getClass());

	@Resource
	private UserBus userBus;

	/**
	 * <p>
	 * 获取登录用户信息和权限
	 * </p>
	 */
	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	public List<Users> userInfo() {
		return null;
	}

}