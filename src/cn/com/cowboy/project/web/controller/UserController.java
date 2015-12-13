package cn.com.cowboy.project.web.controller;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.PageSupport;
import cn.com.cowboy.project.utils.ResponseJson;

@Controller
@Scope("prototype")
@RequestMapping(value = "/user")
public class UserController
{
	@Resource
	private UserBus userBus;
	public static final int pageSize = 15;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	@ResponseBody
	public PageSupport<Users> list(@RequestParam("page") int page, Users example)
	{
		PageSupport<Users> p = userBus.findPageByExample(example, page, pageSize);
		return p;
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@ResponseBody
	public ResponseJson save(Users u)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			userBus.save(u);
		} catch (Exception e)
		{
			e.printStackTrace();
			retJson.setSuccess(false);
			retJson.setMsg("添加失败");
			return retJson;
		}
		retJson.setSuccess(true);
		retJson.setMsg("添加成功");
		return retJson;
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	@ResponseBody
	public ResponseJson update(@RequestParam("id") String id, Users u)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			userBus.updateById(id, u);
		} catch (Exception e)
		{
			e.printStackTrace();
			retJson.setSuccess(false);
			retJson.setMsg("修改失败");
			return retJson;
		}
		retJson.setSuccess(true);
		retJson.setMsg("修改成功");
		return retJson;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	@ResponseBody
	public ResponseJson delete(@RequestParam("ids") String[] ids)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			userBus.batchDelete(ids);
		} catch (Exception e)
		{
			e.printStackTrace();
			retJson.setSuccess(false);
			retJson.setMsg("删除失败");
			return retJson;
		}
		retJson.setSuccess(true);
		retJson.setMsg("删除成功");
		return retJson;
	}

	@RequestMapping(value = "/userInfo", method = RequestMethod.GET)
	@ResponseBody
	public Users getUserInfo()
	{
		return userBus.findByName("zhangkai");
	}
}
