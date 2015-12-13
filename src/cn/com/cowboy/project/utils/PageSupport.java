package cn.com.cowboy.project.utils;

import java.util.List;

import cn.com.cowboy.project.entity.AbstractEntity;

/**
 * @author cowboy
 * @date ：2015年12月13日 下午1:45:13
 * @version 1.0
 */
public class PageSupport<M extends AbstractEntity<String>>
{
	/**
	 * 页码
	 */
	private int page;
	/**
	 * 每页多少条
	 */
	private int limit;

	/**
	 * 总数
	 */
	private Integer total;
	/**
	 * 分页内容
	 */
	private List<M> rows;

	/**
	 * @param page
	 * @param limit
	 * @param total
	 * @param rows
	 */
	public PageSupport(int page, int limit, Integer total, List<M> rows)
	{
		super();
		this.page = page;
		this.limit = limit;
		this.total = total;
		this.rows = rows;
	}

	public int getPage()
	{
		return page;
	}

	public void setPage(int page)
	{
		this.page = page;
	}

	public int getLimit()
	{
		return limit;
	}

	public void setLimit(int limit)
	{
		this.limit = limit;
	}

	public List<M> getRows()
	{
		return rows;
	}

	public void setRows(List<M> rows)
	{
		this.rows = rows;
	}

	public Integer getTotal()
	{
		return total;
	}

	public void setTotal(Integer total)
	{
		this.total = total;
	}

}
