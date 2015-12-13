package cn.com.cowboy.project.business;

import java.io.Serializable;
import java.util.List;

import cn.com.cowboy.project.entity.AbstractEntity;

/**
 * @author cowboy
 * @date ：2015年12月7日 下午8:53:56
 * @version 1.0
 */
public abstract interface BaseBus<M extends AbstractEntity<ID>, ID extends Serializable>
{
	/**
	 * 根据ID不为空查询一条记录
	 * 
	 * @param id
	 * @return
	 */
	public abstract M findById(Object id);

	/**
	 * 获取所有的
	 * 
	 * @return
	 */
	public abstract List<M> findAll();

	/**
	 * 根据条件查询所有的
	 * 
	 * @param record
	 * @return
	 */
	public abstract List<M> findListByExample(M m);

	/**
	 * 新增操作
	 * 
	 * @param u
	 */
	public abstract void save(M m);

	/**
	 * 根据不为空的ID删除一条记录
	 * 
	 * @param id
	 * @return
	 */
	public abstract int delete(Object id);

	/**
	 * 只会更新不是null的数据
	 * 
	 * @param record
	 * @return
	 */
	public abstract int updateById(Object id, M m);

}
