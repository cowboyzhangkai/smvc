/**
 *  <b>日期：</b>2 Sep, 2014-2:49:49 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

/**
 * <b>类名称：</b>Privilege<br/>
 * <b>类描述：</b>权限<br/>
 * <b>创建时间：</b>2 Sep, 2014 2:49:49 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "permissions")
public class Permissions {
	private static final long serialVersionUID = 1917524566845302781L;

	private String id;
	/**
	 * cn_name:权限名（中文）
	 */
	@Column(name = "cn_name", nullable = false)
	private String cnName;

	/**
	 * name:权限名（英文）
	 */
	@Column(name = "name", nullable = false)
	private String name;

	/**
	 * position:排序字段
	 */
	@Column(name = "position")
	private Integer position;

	/**
	 * val:权限值，
	 */
	@Column(name = "val")
	private String val;

	@OneToMany(mappedBy = "permission", fetch = FetchType.LAZY)
	@OrderBy("id desc")
	private List<RolePermissionRelat> rolePermissionRelats;

	@ManyToOne
	@JoinColumn(name = "perm_group_id", nullable = true)
	private PermissionGroup permissionGroup;

	public Permissions() {
	}

	/**
	 * 创建一个新的实例 Privilege.
	 * 
	 * @param name
	 * @param cnName
	 */
	public Permissions(String name, String cnName) {
		super();
		this.name = name;
		this.cnName = cnName;
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

	/**
	 * val
	 * 
	 * @return the val
	 */
	public String getVal() {
		return val;
	}

	/**
	 * @param val
	 *            the val to set
	 */
	public void setVal(String val) {
		this.val = val;
	}

	/**
	 * permissionGroup
	 * 
	 * @return the permissionGroup
	 */
	public PermissionGroup getPermissionGroup() {
		return permissionGroup;
	}

	/**
	 * @param permissionGroup
	 *            the permissionGroup to set
	 */
	public void setPermissionGroup(PermissionGroup permissionGroup) {
		this.permissionGroup = permissionGroup;
	}

	/**
	 * rolePermissionRelats
	 * 
	 * @return the rolePermissionRelats
	 */
	public List<RolePermissionRelat> getRolePermissionRelats() {
		return rolePermissionRelats;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Privilege [cnName=" + cnName + ", name=" + name + ", position="
				+ position + ", val=" + val + ", getId()=" + getId() + "]";
	}

}
