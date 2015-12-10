/**
 *  <b>日期：</b>2 Sep, 2014-2:50:06 pm<br/>
 *  <b>Copyright (c)</b> 2014 广州天健软件有限公司<br/>
 */
package cn.com.cowboy.project.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

/**
 * <b>类名称：</b>PermissionGroup<br/>
 * <b>类描述：</b>权限分类。<br/>
 * <b>创建时间：</b>2 Sep, 2014 2:50:06 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "permission_group")
public class PermissionGroup {
	private static final long serialVersionUID = 6922273276996726722L;

	@Column(name = "id")
	private String id;
	/**
	 * name:权限分类名字
	 */
	@Column(name = "name")
	private String name;

	@OneToMany(mappedBy = "permissionGroup")
	@OrderBy("id desc")
	private List<Permissions> permissions;

	public PermissionGroup() {
	}

	/**
	 * permissions
	 * 
	 * @return the permissions
	 */
	public List<Permissions> getPermissions() {
		return permissions;
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

}
