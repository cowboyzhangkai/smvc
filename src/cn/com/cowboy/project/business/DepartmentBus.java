package cn.com.cowboy.project.business;

import java.util.List;

import cn.com.cowboy.project.entity.Department;

/** 
  * @author  cowboy
  * @date ：2015年12月7日 下午8:45:46 
  * @version 1.0 
*/
public interface DepartmentBus
{
	/**
	 * 获取所有部门
	 * @return
	 */
	public List<Department> findAll();
}
