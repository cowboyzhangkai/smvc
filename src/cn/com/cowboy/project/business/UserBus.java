package cn.com.cowboy.project.business;

import cn.com.cowboy.project.entity.Users;

/**
 * 
 * @author cowboy
 *
 */
public interface UserBus extends BaseBus<Users, String>
{
	/**
	 * 修改密码
	 * 
	 * @param id
	 * @param newPwd
	 */
	public void changePwd(String id, String newPwd);

	/**
	 * 根据登录名获取登录用户
	 * 
	 * @param name
	 * @return
	 */
	public Users findByName(String name);
}
