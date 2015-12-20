package cn.com.cowboy.project.web.controller;

import javax.annotation.Resource;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.cowboy.project.business.TransBillBus;
import cn.com.cowboy.project.entity.TransBill;
import cn.com.cowboy.project.utils.PageSupport;
import cn.com.cowboy.project.utils.ResponseJson;

/**
 * @author cowboy
 * @date ：2015年12月13日 下午9:17:23
 * @version 1.0
 */
@Controller
@Scope("prototype")
@RequestMapping(value = "/transbill")
public class TransBillController
{

	@Resource
	private TransBillBus transBillBus;
	public static final int pageSize = 15;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	@ResponseBody
	public PageSupport<TransBill> list(@RequestParam("page") int page, TransBill example)
	{
		PageSupport<TransBill> p = null;
		try
		{
			p = transBillBus.findPageByExample(example, page, pageSize);
		} catch (Exception e)
		{
		}
		return p;
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@ResponseBody
	public ResponseJson save(TransBill t)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			transBillBus.save(t);
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
	public ResponseJson update(@RequestParam("id") String id, TransBill t)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			transBillBus.updateById(id, t);
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
			transBillBus.batchDelete(ids);
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
}
