/**
 *  <b>日期：</b>2015年12月23日-下午5:32:26<br/>
 *  <b>Copyright (c)</b> 2015 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.web.filter;

import java.awt.image.BufferedImage;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.com.cowboy.project.utils.CaptchaUtils;

/**
 * <b>类名称：</b>CaptchaFilter<br/>
 * <b>类描述：</b>验证码的生成<br/>
 * <b>创建时间：</b>2015年12月23日 下午5:32:26<br/>
 * <b>备注：</b><br/>
 * 
 * @author cowboy <br />
 * @version 1.0.0<br/>
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/filter")
public class CaptchaFilter
{
	public static final String KEY_CAPTCHA = "validateCode";

	@RequestMapping(value = "/validateCode", method = RequestMethod.GET)
	public void validateCode(HttpServletResponse resp, HttpServletRequest req)
	{
		// 设置相应类型,告诉浏览器输出的内容为图片
		resp.setContentType("image/jpeg");
		// 不缓存此内容
		resp.setHeader("Pragma", "No-cache");
		resp.setHeader("Cache-Control", "no-cache");
		resp.setDateHeader("Expire", 0);
		try
		{
			HttpSession session = req.getSession();
			CaptchaUtils tool = new CaptchaUtils();
			StringBuffer code = new StringBuffer();
			BufferedImage image = tool.genRandomCodeImage(code);
			session.removeAttribute(KEY_CAPTCHA);
			session.setAttribute(KEY_CAPTCHA, code.toString());

			// 将内存中的图片通过流动形式输出到客户端
			ImageIO.write(image, "JPEG", resp.getOutputStream());

		} catch (Exception e)
		{
			e.printStackTrace();
		}

	}
}
