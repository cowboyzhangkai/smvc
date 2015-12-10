/**
 *  <b>日期：</b>1 Dec, 2014-9:49:09 am<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.web.system;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cn.com.cowboy.project.utils.ControllerHelper;

import com.google.common.collect.Maps;

/**
 * <b>类名称：</b>CheckLoginFailed<br/>
 * <b>类描述：</b>检查登录是否失败<br/>
 * <b>创建时间：</b>1 Dec, 2014 9:49:09 am<br/>
 * <b>备注：</b><br/>
 * 
 * @author cowboy <br />
 * @version 1.0.0 <br/>
 */
@RestController
@Scope("prototype")
@RequestMapping("/sys")
public class CheckLoginFailed {

	private Log logger = LogFactory.getLog(this.getClass());

	/**
	 * <p>
	 * 获取登录的失败信息，如果有的话
	 * </p>
	 * 
	 * @return
	 */
	@RequestMapping(value = "/loginFaild", method = { RequestMethod.GET,
			RequestMethod.POST })
	public Map<String, Object> loginResultMessage() {
		Map<String, Object> m = Maps.newHashMap();
		String errorMsg = getErrorMssage();
		if (StringUtils.isNotBlank(errorMsg)) {
			logger.debug(errorMsg);
		}
		m.put("errorMsg", errorMsg);
		return m;
	}

	/**
	 * <p>
	 * 获取错误的信息
	 * </p>
	 * 
	 * @return String
	 */
	private String getErrorMssage() {

		HttpSession session = ControllerHelper.getSession();
		Object ex = session
				.getAttribute(FormAuthenticationFilter.DEFAULT_ERROR_KEY_ATTRIBUTE_NAME);
		String errorMsg = StringUtils.EMPTY;
		if (ex != null) {
			if (ex instanceof AuthenticationException) {
				AuthenticationException authEx = (AuthenticationException) ex;
				String code = authEx.getMessage();
				errorMsg = code;
				session.removeAttribute(FormAuthenticationFilter.DEFAULT_ERROR_KEY_ATTRIBUTE_NAME);
			}
		}
		return errorMsg;
	}

}
