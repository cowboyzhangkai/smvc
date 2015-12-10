/**
 *  <b>日期：</b>2 Sep, 2014-2:49:32 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * <b>类名称：</b>GroupPrivilege<br/>
 * <b>类描述：</b>用户组与权限关系中间实体。<br/>
 * <b>创建时间：</b>2 Sep, 2014 2:49:32 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "role_permission_relat")
public class RolePermissionRelat {
	private static final long serialVersionUID = -5025638727283225819L;

	@Column(name = "id")
	private String id;

	@Column(name = "position")
	private Integer position;

	@ManyToOne
	@JoinColumn(name = "role_id")
	private Roles role;

	@ManyToOne
	@JoinColumn(name = "permission_id")
	private Permissions permission;

	public RolePermissionRelat() {
	}

	/**
	 * 创建一个新的实例 RolePermissionRelat.
	 * 
	 * @param role
	 * @param permission
	 */
	public RolePermissionRelat(Roles role, Permissions permission) {
		super();
		this.role = role;
		this.permission = permission;
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
	 * permission
	 * 
	 * @return the permission
	 */
	public Permissions getPermission() {
		return permission;
	}

	/**
	 * @param permission
	 *            the permission to set
	 */
	public void setPermission(Permissions permission) {
		this.permission = permission;
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

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RolePermissionRelat [position=" + position + ", getId()="
				+ getId() + "]";
	}

}
