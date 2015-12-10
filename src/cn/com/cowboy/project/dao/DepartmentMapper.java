package cn.com.cowboy.project.dao;

import java.util.List;

import cn.com.cowboy.project.entity.Department;

public interface DepartmentMapper {
	List<Department> findAll();

	void save(Department department);
}
