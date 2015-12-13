package cn.com.cowboy.project.business.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.apache.commons.lang3.Validate;
import org.springframework.stereotype.Service;

import cn.com.cowboy.project.business.TransBillBus;
import cn.com.cowboy.project.dao.TransBillMapper;
import cn.com.cowboy.project.entity.TransBill;
import cn.com.cowboy.project.utils.PageSupport;

/**
 * @author cowboy
 * @date ：2015年12月13日 下午9:10:57
 * @version 1.0
 */
@Service("transBillBus")
public class TransBillBusImpl implements TransBillBus
{
	@Resource
	private TransBillMapper transBillMapper;

	@Override
	public TransBill findById(Object id)
	{
		return transBillMapper.findById(id);
	}

	@Override
	public List<TransBill> findAll()
	{
		return transBillMapper.findAll();
	}

	@Override
	public void save(TransBill m)
	{
		Validate.notNull(m);
		Validate.notNull(m.getBillNo());
		m.setId(UUID.randomUUID().toString());
		transBillMapper.save(m);
	}

	@Override
	public int delete(Object id)
	{
		return transBillMapper.delete(id);
	}

	@Override
	public int updateById(Object id, TransBill m)
	{
		Validate.notNull(m);
		return transBillMapper.updateById(id, m);
	}

	@Override
	public PageSupport<TransBill> findPageByExample(TransBill m, int pageNo, int pageSize)
	{
		int startIndex = (pageNo - 1) * pageSize;
		List<TransBill> rows = transBillMapper.findPageByExample(m, startIndex, pageSize);
		Integer total = transBillMapper.getTotalCount(m);
		PageSupport<TransBill> p = new PageSupport<TransBill>(pageNo, pageSize, total, rows);
		return p;
	}

	@Override
	public void batchDelete(String[] ids)
	{
		try
		{
			for (String id : ids)
			{
				transBillMapper.delete(id);
			}
		} catch (Exception e)
		{
			throw new RuntimeException(e);
		}
	}
}
