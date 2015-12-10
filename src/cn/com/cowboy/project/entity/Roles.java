/**
 *  <b>日期：</b>2 Sep, 2014-2:29:31 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * <b>类名称：</b>Groups<br/>
 * <b>类描述：</b>用户组<br/>
 * <b>创建时间：</b>2 Sep, 2014 2:29:31 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "roles")
public class Roles {
	private static final long serialVersionUID = -4428102090786314234L;

	@Column(name = "id")
	private String id;

	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_time")
	private Date createTime = new Date();

	/**
	 * cnName:用户组显示名（中文）
	 */
	@Column(name = "cn_name")
	private String cnName;

	/**
	 * name:用户组名（英文）
	 */
	@Column(name = "name")
	private String name;

	@Column(name = "position")
	private Integer position;

	@ManyToOne
	@JoinColumn(name = "parent_id", nullable = true)
	private Roles parentRole;

	@OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
	@OrderBy("id desc")
	private List<RolePermissionRelat> rolePermissionRelats;

	@OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
	@OrderBy("id desc")
	private List<UserRoleRelat> userRoleRelats;

	public Roles() {
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * parentRole
	 * 
	 * @return the parentRole
	 */
	public Roles getParentRole() {
		return parentRole;
	}

	/**
	 * @param parentRole
	 *            the parentRole to set
	 */
	public void setParentRole(Roles parentRole) {
		this.parentRole = parentRole;
	}

	/**
	 * rolePermissionRelats
	 * 
	 * @return the rolePermissionRelats
	 */
	public List<RolePermissionRelat> getRolePermissionRelats() {
		return rolePermissionRelats;
	}

	/**
	 * userRoleRelats
	 * 
	 * @return the userRoleRelats
	 */
	public List<UserRoleRelat> getUserRoleRelats() {
		return userRoleRelats;
	}

	/**
	 * parentGroup
	 * 
	 * @return the parentGroup
	 */
	public Roles getParentGroup() {
		return parentRole;
	}

	/**
	 * @param parentGroup
	 *            the parentGroup to set
	 */
	public void setParentGroup(Roles parentGroup) {
		this.parentRole = parentGroup;
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
	 * cnName
	 * 
	 * @return the cnName
	 */
	public String getCnName() {
		return cnName;
	}

	/**
	 * @param cnName
	 *            the cnName to set
	 */
	public void setCnName(String cnName) {
		this.cnName = cnName;
	}

	/**
	 * name
	 * 
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * position
	 * 
	 * @return the position
	 */
	public Integer getPosition() {
		return position;
	}

	/**
	 * @param position
	 *            the position to set
	 */
	public void setPosition(Integer position) {
		this.position = position;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Roles [createTime=" + createTime + ", cnName=" + cnName
				+ ", name=" + name + ", position=" + position + ", getId()="
				+ getId() + "]";
	}

}
