/**
 *  <b>日期：</b>28 Aug, 2014-2:48:22 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import java.util.Date;

import cn.com.cowboy.project.enums.Gender;

/**
 * <b>类名称：</b>Users<br/>
 * <b>类描述：</b>用户<br/>
 * <b>创建时间：</b>28 Aug, 2014 2:48:22 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author cowboy <br />
 * @version 1.0.0 <br/>
 */
public class Users extends BaseEntity<String>
{

	private static final long serialVersionUID = -2090995922354697224L;
	/**
	 * 用户登录名
	 */
	private String name;
	/**
	 * 用户密码
	 */
	private String password;
	/**
	 * 用户显示名
	 */
	private String cnName;
	/**
	 * 用户性别
	 */
	private Gender gender;
	/**
	 * 用户移动电话号码
	 */
	private String mobile;
	/**
	 * 用户电话号码
	 */
	private String phone;

	/**
	 * 所属部门
	 */
	private Department department;
	/**
	 * 用户创建时间
	 */
	private Date createTime;
	/**
	 * 用户最后登录时间
	 */
	private Date lastLogin;
	/**
	 * 用户是否激活
	 */
	private Boolean isActive;

	/**
	 * 排序字段
	 */
	private Integer position;

	private String salt;

	/**
	 * 创建一个新的实例 User.
	 */
	public Users()
	{
		super();
	}

	/**
	 * 最小构造函数.
	 * 
	 * @param name
	 * @param password
	 */
	public Users(String name, String password)
	{
		super();
		this.name = name;
		this.password = password;
	}

	/**
	 * name
	 * 
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * password
	 * 
	 * @return the password
	 */
	public String getPassword()
	{
		return password;
	}

	/**
	 * @param password
	 *            the password to set
	 */
	public void setPassword(String password)
	{
		this.password = password;
	}

	/**
	 * @return the cnName
	 */
	public String getCnName()
	{
		return cnName;
	}

	/**
	 * @param cnName
	 *            the cnName to set
	 */
	public void setCnName(String cnName)
	{
		this.cnName = cnName;
	}

	/**
	 * mobile
	 * 
	 * @return the mobile
	 */
	public String getMobile()
	{
		return mobile;
	}

	/**
	 * @param mobile
	 *            the mobile to set
	 */
	public void setMobile(String mobile)
	{
		this.mobile = mobile;
	}

	/**
	 * phone
	 * 
	 * @return the phone
	 */
	public String getPhone()
	{
		return phone;
	}

	/**
	 * @param phone
	 *            the phone to set
	 */
	public void setPhone(String phone)
	{
		this.phone = phone;
	}

	/**
	 * createTime
	 * 
	 * @return the createTime
	 */
	public Date getCreateTime()
	{
		return createTime;
	}

	/**
	 * @param createTime
	 *            the createTime to set
	 */
	public void setCreateTime(Date createTime)
	{
		this.createTime = createTime;
	}

	/**
	 * lastLogin
	 * 
	 * @return the lastLogin
	 */
	public Date getLastLogin()
	{
		return lastLogin;
	}

	/**
	 * @param lastLogin
	 *            the lastLogin to set
	 */
	public void setLastLogin(Date lastLogin)
	{
		this.lastLogin = lastLogin;
	}

	/**
	 * isActive
	 * 
	 * @return the isActive
	 */
	public Boolean getIsActive()
	{
		return isActive;
	}

	/**
	 * @param isActive
	 *            the isActive to set
	 */
	public void setIsActive(Boolean isActive)
	{
		this.isActive = isActive;
	}

	/**
	 * position
	 * 
	 * @return the position
	 */
	public Integer getPosition()
	{
		return position;
	}

	/**
	 * @param position
	 *            the position to set
	 */
	public void setPosition(Integer position)
	{
		this.position = position;
	}

	/**
	 * @return the department
	 */
	public Department getDepartment()
	{
		return department;
	}

	/**
	 * @param department
	 *            the department to set
	 */
	public void setDepartment(Department department)
	{
		this.department = department;
	}

	public Gender getGender()
	{
		return gender;
	}

	public void setGender(Gender gender)
	{
		this.gender = gender;
	}

	/**
	 * salt
	 * 
	 * @return the salt
	 */
	public String getSalt()
	{
		return salt;
	}

	/**
	 * @param salt
	 *            the salt to set
	 */
	public void setSalt(String salt)
	{
		this.salt = salt;
	}

	/**
	 * userRoleRelats
	 * 
	 * @return the userRoleRelats
	 */
	// public List<UserRoleRelat> getUserRoleRelats() {
	// return userRoleRelats;
	// }

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString()
	{
		return "Users [name=" + name + ", password=" + password + ", cnName=" + cnName + ", gender=" + gender
				+ ", mobile=" + mobile + ", phone=" + phone + ", createTime=" + createTime + ", lastLogin=" + lastLogin
				+ ", isActive=" + isActive + ", position=" + position + "]";
	}

	@Override
	public boolean isNew()
	{
		return (null == getId());
	}
}
