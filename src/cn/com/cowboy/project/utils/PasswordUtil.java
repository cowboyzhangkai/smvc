package cn.com.cowboy.project.utils;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang3.RandomStringUtils;

import cn.com.cowboy.project.entity.Users;

public class PasswordUtil
{

	/**
	 * 生成随机加密因子
	 * 
	 * @return
	 */
	public static String randomSalt()
	{
		return RandomStringUtils.randomAlphanumeric(16);
	}

	/**
	 * 登录验证用户
	 * 
	 * @param user
	 * @param newPwd
	 * @return
	 */
	public static boolean matches(Users user, String newPwd)
	{
		return user.getPassword().equals(encryptPassword(user, newPwd));
	}

	/**
	 * 给新注册用户加密算法
	 * 
	 * @param user
	 * @param rawPwd
	 * @return
	 */
	public static String encryptPassword(Users user, String rawPwd)
	{
		return encryptPassword(user.getName(), rawPwd, user.getSalt());
	}

	private static String encryptPassword(String name, String rawPwd, String salt)
	{
		return encode(name.concat(rawPwd), salt);
	}

	private static String encode(String paramString1, String paramString2)
	{
		if (paramString1 != null)
			paramString1 = paramString1 + paramString2.toString();
		MessageDigest localMessageDigest;
		try
		{
			localMessageDigest = MessageDigest.getInstance("MD5");
		} catch (NoSuchAlgorithmException localNoSuchAlgorithmException)
		{
			throw new IllegalArgumentException("No such algorithm [" + paramString2 + "]");
		}
		byte[] paramString3;
		try
		{
			byte[] input = paramString1.getBytes("UTF-8");
			paramString3 = localMessageDigest.digest(input);
		} catch (UnsupportedEncodingException localUnsupportedEncodingException)
		{
			throw new IllegalStateException("UTF-8 not supported!");
		}
		return new String(Hex.encodeHex(paramString3));
	}
}
