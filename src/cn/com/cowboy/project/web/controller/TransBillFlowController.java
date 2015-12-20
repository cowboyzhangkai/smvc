package cn.com.cowboy.project.web.controller;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.cowboy.project.business.TransBillFlowBus;
import cn.com.cowboy.project.entity.TransBillFlow;
import cn.com.cowboy.project.utils.PageSupport;
import cn.com.cowboy.project.utils.ResponseJson;

/**
 * @author cowboy
 * @date ：2015年12月19日 上午11:25:48
 * @version 1.0
 */
public class TransBillFlowController
{

	@Resource
	private TransBillFlowBus transBillFlowBus;
	public static final int pageSize = 15;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	@ResponseBody
	public PageSupport<TransBillFlow> list(@RequestParam("page") int page, TransBillFlow example)
	{
		PageSupport<TransBillFlow> p = transBillFlowBus.findPageByExample(example, page, pageSize);
		return p;
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	@ResponseBody
	public ResponseJson save(TransBillFlow t)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			transBillFlowBus.save(t);
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
	public ResponseJson update(@RequestParam("id") String id, TransBillFlow t)
	{
		ResponseJson retJson = new ResponseJson();
		try
		{
			transBillFlowBus.updateById(id, t);
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
			transBillFlowBus.batchDelete(ids);
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
