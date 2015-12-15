/**
 *  <b>日期：</b>Aug 13, 2012-10:46:55 AM<br/>
 *  <b>Copyright (c)</b> 2012 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.web.system;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.com.cowboy.project.utils.ControllerHelper;

/**
 * <b>类名称：</b>LoginAction<br/>
 * <b>类描述：</b>登录成功后的跳转页面<br/>
 * <b>创建时间：</b>Aug 13, 2012 10:46:55 AM<br/>
 * <b>备注：</b><br/>
 *
 * @author cowboy <br />
 * @version 1.0.0 <br/>
 */
@Controller
@Scope("prototype")
public class Main {
    @RequestMapping(value = "/admin", method = RequestMethod.GET)
    public String excute() {
        return ControllerHelper.redirectToUrl("/views/main.html");
    }
}
