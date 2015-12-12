package cn.com.cowboy.project.web.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;

@Controller
@Scope("prototype")
@RequestMapping(value = "/user")
public class UserController
{
	@Resource
	private UserBus userBus;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	@ResponseBody
	public List<Users> list(@RequestParam("page") int page, @RequestParam("limit") int pageSize, String cnName)
	{
		Users u = new Users();
		u.setCnName(cnName);
		// Department dept = new Department("沙溪社区");
		// u.setDepartment(dept);
		// return userBus.findListByExample(u);
		int pageNo = 1;
		int currNo = (pageNo - 1) * pageSize;
		List<Users> p = userBus.findPageByExample(u, currNo, pageSize);
		return p;
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@ResponseBody
	public void save(Users u)
	{
		userBus.save(u);
	}

	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	@ResponseBody
	public Users getUserInfo()
	{
		return userBus.findByName("zhangkai");
	}
}
