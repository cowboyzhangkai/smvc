/**
 *  <b>日期：</b>2 Sep, 2014-2:13:03 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * <b>类名称：</b>UserGroup<br/>
 * <b>类描述：</b>用户与用户组关系中间表<br/>
 * <b>创建时间：</b>2 Sep, 2014 2:13:03 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "user_role_relat")
public class UserRoleRelat {
	private static final long serialVersionUID = 1988298812854016436L;

	@Column(name = "id")
	private String id;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private Users user;

	@ManyToOne
	@JoinColumn(name = "role_id", nullable = false)
	private Roles role;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@Column(name = "create_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime = new Date();

	public UserRoleRelat() {
	}

	/**
	 * 创建一个新的实例 UserGroup.
	 * 
	 * @param user
	 * @param role
	 */
	public UserRoleRelat(Users user, Roles role) {
		super();
		this.user = user;
		this.role = role;
	}

	/**
	 * createTime
	 * 
	 * @return the createTime
	 */
	public Date getCreateTime() {
		return createTime;
	}

	/**
	 * @param createTime
	 *            the createTime to set
	 */
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	/**
	 * user
	 * 
	 * @return the user
	 */
	public Users getUser() {
		return user;
	}

	/**
	 * @param user
	 *            the user to set
	 */
	public void setUser(Users user) {
		this.user = user;
	}

	/**
	 * role
	 * 
	 * @return the role
	 */
	public Roles getRole() {
		return role;
	}

	/**
	 * @param role
	 *            the role to set
	 */
	public void setRole(Roles role) {
		this.role = role;
	}

	
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "UserRoleRelat [getId()=" + getId() + "]";
	}

}
