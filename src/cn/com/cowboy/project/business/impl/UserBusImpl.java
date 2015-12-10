package cn.com.cowboy.project.business.impl;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.dao.UserMapper;
import cn.com.cowboy.project.entity.Users;

@Service("userBus")
public class UserBusImpl extends BaseAbstractBus<Users, String> implements UserBus
{
	private static final Log logger = LogFactory.getLog(UserBusImpl.class);
	@Resource
	private UserMapper userMapper;
	
	

	public void setUserMapper(UserMapper userMapper)
	{
		this.userMapper = userMapper;
	}

	@Override
	public void changePwd(String id, String newPwd)
	{
		Assert.notNull(id);
		Assert.notNull(newPwd);
		try
		{
			userMapper.changePwd(id, newPwd);
		} catch (Exception e)
		{
			logger.debug("修改密码出错！语句", e);
		}
	}

	@Override
	public Users findByName(String name)
	{
		return userMapper.findByName(name);
	}

}
