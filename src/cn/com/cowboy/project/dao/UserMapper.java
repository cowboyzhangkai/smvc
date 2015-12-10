package cn.com.cowboy.project.dao;

import org.apache.ibatis.annotations.Param;

import cn.com.cowboy.project.entity.Users;

public interface UserMapper extends BaseMapper<Users, String>
{
	Users findByName(String loginName);

	void changePwd(@Param("id") String id, @Param("newPwd") String newPwd);
}
