package cn.com.cowboy.project.dao;

import java.io.Serializable;
import java.util.List;

import org.apache.ibatis.annotations.Param;

public interface BaseMapper<M, ID extends Serializable>
{
	/**
	 * 根据ID不为空查询一条记录
	 * 
	 * @param id
	 * @return
	 */
	M findById(@Param("id") Object id);

	/**
	 * 获取所有的
	 * 
	 * @return
	 */
	List<M> findAll();

	/**
	 * 根据条件查询所有的
	 * 
	 * @param record
	 * @return
	 */
	List<M> findListByExample(@Param("m") M m);

	/**
	 * 分页查询
	 * 
	 * @param t
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	List<M> findPageByExample(@Param("m") M m, @Param("pageNo") int pageNo, @Param("pageSize") int pageSize);

	/**
	 * 获取分页的总数
	 * 
	 * @param u
	 * @return
	 */
	Integer getTotalCount(@Param("m") M m);

	/**
	 * 新增操作
	 * 
	 * @param u
	 */
	void save(@Param("m") M m);

	/**
	 * 根据不为空的ID删除一条记录
	 * 
	 * @param id
	 * @return
	 */
	int delete(@Param("id") Object id);

	/**
	 * 只会更新不是null的数据
	 * 
	 * @param record
	 * @return
	 */
	int updateById(@Param("id") Object id, @Param("m") M m);
}
