package cn.com.cowboy.project.business.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import cn.com.cowboy.project.business.BaseBus;
import cn.com.cowboy.project.dao.BaseMapper;
import cn.com.cowboy.project.entity.AbstractEntity;

/**
 * @author cowboy
 * @date ：2015年12月7日 下午9:00:03
 * @version 1.0
 */
public abstract class BaseAbstractBus<M extends AbstractEntity<ID>, ID extends Serializable> implements BaseBus<M, ID>
{

	@Resource
	protected BaseMapper<M, ID> baseMapper;

	protected Class<M> entityClass;

	@Override
	public M findById(Object id)
	{
		return baseMapper.findById(id);
	}

	@Override
	public List<M> findAll()
	{
		return baseMapper.findAll();
	}

	@Override
	public List<M> findListByExample(M m)
	{
		return baseMapper.findListByExample(m);
	}


	@Override
	public void save(M m)
	{
		baseMapper.save(m);
	}

	@Override
	public int delete(Object id)
	{
		return baseMapper.delete(id);
	}

	@Override
	public int updateById(Object id, M m)
	{
		return baseMapper.updateById(id, m);
	}

}
