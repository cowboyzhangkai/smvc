package cn.com.cowboy.project.business.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.apache.commons.lang3.Validate;

import cn.com.cowboy.project.business.TransBillFlowBus;
import cn.com.cowboy.project.dao.TransBillFlowMapper;
import cn.com.cowboy.project.entity.TransBillFlow;
import cn.com.cowboy.project.utils.PageSupport;

/**
 * @author cowboy
 * @date ：2015年12月19日 上午11:21:37
 * @version 1.0
 */
public class TransBillFlowBusImpl implements TransBillFlowBus
{
	@Resource
	private TransBillFlowMapper transBillFlowMapper;

	@Override
	public TransBillFlow findById(Object id)
	{
		return transBillFlowMapper.findById(id);
	}

	@Override
	public List<TransBillFlow> findAll()
	{
		return transBillFlowMapper.findAll();
	}

	@Override
	public void save(TransBillFlow m)
	{
		Validate.notNull(m);
		Validate.notNull(m.getTransBill());
		Validate.notNull(m.getStation());
		Validate.notNull(m.getOptTime());
		m.setId(UUID.randomUUID().toString());
		transBillFlowMapper.save(m);
	}

	@Override
	public int delete(Object id)
	{
		return transBillFlowMapper.delete(id);
	}

	@Override
	public int updateById(Object id, TransBillFlow m)
	{
		Validate.notNull(m);
		return transBillFlowMapper.updateById(id, m);
	}

	@Override
	public PageSupport<TransBillFlow> findPageByExample(TransBillFlow m, int pageNo, int pageSize)
	{
		int startIndex = (pageNo - 1) * pageSize;
		List<TransBillFlow> rows = transBillFlowMapper.findPageByExample(m, startIndex, pageSize);
		Integer total = transBillFlowMapper.getTotalCount(m);
		PageSupport<TransBillFlow> p = new PageSupport<TransBillFlow>(pageNo, pageSize, total, rows);
		return p;
	}

	@Override
	public void batchDelete(String[] ids)
	{
		try
		{
			for (String id : ids)
			{
				transBillFlowMapper.delete(id);
			}
		} catch (Exception e)
		{
			throw new RuntimeException(e);
		}
	}

}
