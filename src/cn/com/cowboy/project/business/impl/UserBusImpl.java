package cn.com.cowboy.project.business.impl;

import java.util.List;
import java.util.UUID;

import javax.annotation.Resource;

import org.apache.commons.lang3.Validate;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import cn.com.cowboy.project.business.UserBus;
import cn.com.cowboy.project.dao.UserMapper;
import cn.com.cowboy.project.entity.Users;
import cn.com.cowboy.project.utils.PasswordUtils;

@Service("userBus")
public class UserBusImpl implements UserBus
{
	private static final Log logger = LogFactory.getLog(UserBusImpl.class);
	@Resource
	private UserMapper userMapper;

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

	@Override
	public Users findById(Object id)
	{
		return userMapper.findById(id);
	}

	@Override
	public List<Users> findAll()
	{
		return userMapper.findAll();
	}

	@Override
	public List<Users> findListByExample(Users m)
	{
		return userMapper.findListByExample(m);
	}

	@Override
	public List<Users> findPageByExample(Users m, int pageNo, int pageSize)
	{
		return userMapper.findPageByExample(m, pageNo, pageSize);
	}

	@Override
	public void save(Users m)
	{
		Validate.notNull(m);
		Validate.notNull(m.getName());
		Validate.notNull(m.getPassword());
		m.setId(UUID.randomUUID().toString());
		m.setSalt(PasswordUtils.randomSalt());
		m.setPassword(PasswordUtils.encryptPassword(m, m.getPassword()));
		userMapper.save(m);
	}

	@Override
	public int delete(Object id)
	{
		return userMapper.delete(id);
	}

	@Override
	public int updateById(Object id, Users m)
	{
		return userMapper.updateById(id, m);
	}

}
