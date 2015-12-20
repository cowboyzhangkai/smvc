package cn.com.cowboy.project.web.filter;

import org.apache.shiro.authc.UsernamePasswordToken;

/**
 * @author cowboy
 * @date ：2015年12月20日 下午7:49:04
 * @version 1.0
 */
public class UsernamePasswordCaptchaToken extends UsernamePasswordToken
{

	private static final long serialVersionUID = 1L;

	private String captcha;

	public String getCaptcha()
	{
		return captcha;
	}

	public void setCaptcha(String captcha)
	{
		this.captcha = captcha;
	}

	public UsernamePasswordCaptchaToken()
	{
		super();

	}

	public UsernamePasswordCaptchaToken(String username, char[] password, boolean rememberMe, String host,
			String captcha)
	{
		super(username, password, rememberMe, host);
		this.captcha = captcha;
	}

}
