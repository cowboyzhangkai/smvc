package cn.com.cowboy.project.entity;

import java.util.Date;

/**
 * @author cowboy
 * @date ：2015年12月19日 上午10:56:49
 * @描述:运单流程管理entity
 * @version 1.0
 */
public class TransBillFlow extends BaseEntity<String>
{
	private static final long serialVersionUID = -6629558546383419704L;

	/**
	 * 主键
	 */
	private String id;

	/**
	 * 运单信息
	 */
	private TransBill transBill;

	/**
	 * 到达的站点
	 */
	private String station;

	/**
	 * 操作时间（也叫扫描时间）
	 */
	private Date optTime;

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public TransBill getTransBill()
	{
		return transBill;
	}

	public void setTransBill(TransBill transBill)
	{
		this.transBill = transBill;
	}

	public String getStation()
	{
		return station;
	}

	public void setStation(String station)
	{
		this.station = station;
	}

	public Date getOptTime()
	{
		return optTime;
	}

	public void setOptTime(Date optTime)
	{
		this.optTime = optTime;
	}

}
