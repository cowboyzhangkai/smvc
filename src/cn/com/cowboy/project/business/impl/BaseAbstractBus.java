package cn.com.cowboy.project.business.impl;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;

import javax.annotation.Resource;

import org.apache.poi.ss.formula.functions.T;

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
	private Class<M> entityClass;

	/**
	 * 
	 */
	@SuppressWarnings("unchecked")
	public BaseAbstractBus()
	{
		// Type type = getClass().getGenericSuperclass();
		// Type trueType = ((ParameterizedType)
		// type).getActualTypeArguments()[0];
		// this.entityClass = (Class<M>) trueType;
		entityClass = null;
		Type t = getClass().getGenericSuperclass();
		if (t instanceof ParameterizedType)
		{
			Type[] p = ((ParameterizedType) t).getActualTypeArguments();
			entityClass = (Class<M>) p[0];
		} 
	}

	public Class<M> getEntityClass()
	{
		return entityClass;
	}

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
	public List<M> findPageByExample(M m, int pageNo, int pageSize)
	{
		return baseMapper.findPageByExample(m, pageNo, pageSize);
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
