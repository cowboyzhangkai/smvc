/**
 *  <b>日期：</b>28 Aug, 2014-3:12:10 pm<br/>
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
 * <b>类名称：</b>Department<br/>
 * <b>类描述：</b>部门<br/>
 * <b>创建时间：</b>28 Aug, 2014 3:12:10 pm<br/>
 * <b>备注：</b><br/>
 * 
 * @author kennylee <br />
 * @version 1.0.0<br/>
 */
@Entity
@Table(name = "department")
public class Department {
	private static final long serialVersionUID = 438240546388654845L;

	@Column(name = "id")
	private String id;
	/**
	 * 上级部门
	 */
	@ManyToOne
	@JoinColumn(name = "parent_id", nullable = true)
	private Department parentDepartment;
	/**
	 * 部门名称
	 */
	@Column(name = "name")
	private String name;
	/**
	 * 部门排序字段
	 */
	@Column(name = "position")
	private Integer position;
	/**
	 * 层级结构描述字段用","分割
	 */
	@Column(name = "struct")
	private String struct;
	/**
	 * 是否包含子节点
	 */
	@Column(name = "has_sub")
	@org.hibernate.annotations.Type(type = "yes_no")
	// @Formula(value =
	// "(select count(*) from department f_t where f_t.parent_id = id)")
	private Boolean hasSub = Boolean.FALSE;

	@OneToMany(mappedBy = "department", fetch = FetchType.LAZY, orphanRemoval = false)
	@OrderBy("id desc")
	private List<Users> users;

	/**
	 * 创建一个新的实例 Department.
	 */
	public Department() {
		super();
	}

	/**
	 * 最小构造函数.
	 * 
	 * @param name
	 */
	public Department(String name) {
		super();
		this.name = name;
	}

	/**
	 * parentDepartment
	 * 
	 * @return the parentDepartment
	 */
	public Department getParentDepartment() {
		return parentDepartment;
	}

	/**
	 * @param parentDepartment
	 *            the parentDepartment to set
	 */
	public void setParentDepartment(Department parentDepartment) {
		this.parentDepartment = parentDepartment;
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
	 * struct
	 * 
	 * @return the struct
	 */
	public String getStruct() {
		return struct;
	}

	/**
	 * @param struct
	 *            the struct to set
	 */
	public void setStruct(String struct) {
		this.struct = struct;
	}

	/**
	 * hasSub
	 * 
	 * @return the hasSub
	 */
	public Boolean getHasSub() {
		return hasSub;
	}

	/**
	 * @param hasSub
	 *            the hasSub to set
	 */
	public void setHasSub(Boolean hasSub) {
		this.hasSub = hasSub;
	}

	/**
	 * users
	 * 
	 * @return the users
	 */
	public List<Users> getUsers() {
		return users;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Department [name=" + name + ", position=" + position
				+ ", struct=" + struct + ", hasSub=" + hasSub + ", getId()="
				+ getId() + "]";
	}
}
