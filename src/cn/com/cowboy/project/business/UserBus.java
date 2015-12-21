package cn.com.cowboy.project.business;

import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.PageSupport;

/**
 * 
 * @author cowboy
 *
 */
public interface UserBus extends BaseService<Users, String>
{
	/**
	 * 修改密码
	 * 
	 * @param id
	 * @param newPwd
	 */
	public void changeOwnPwd(String id, String newPwd);

	/**
	 * 根据登录名获取登录用户
	 * 
	 * @param name
	 * @return
	 */
	public Users findByName(String name);

	/**
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public PageSupport<Users> findPageByExample(Users m, int pageNo, int pageSize);

	/**
	 * 批量删除
	 * 
	 * @param ids
	 */
	public void batchDelete(String[] ids);
}
