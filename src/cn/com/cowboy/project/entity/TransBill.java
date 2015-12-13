package cn.com.cowboy.project.entity;

import java.util.Date;

/**
 * @author cowboy
 * @date ：2015年12月13日 下午8:44:09
 * @version 1.0
 */
public class TransBill extends BaseEntity<String>
{
	private static final long serialVersionUID = -593541894623041258L;
	private String id;
	/**
	 * 运单号
	 */
	private String billNo;

	/**
	 * 托运日期
	 */
	private Date transTime;

	/**
	 * 到厂装货时间
	 */
	private String loadGoodsPoint;

	/**
	 * 运往目的地
	 */
	private String dest;

	/**
	 * 托运人/公司/工厂
	 */
	private String company;

	/**
	 * 联系人
	 */
	private String contractor;

	/**
	 * 联系电话
	 */
	private String contractPhone;

	/**
	 * 传真
	 */
	private String fax;

	/**
	 * 托运公司地址
	 */
	private String address;

	/**
	 * 运费
	 */
	private Double fee;

	public String getId()
	{
		return id;
	}

	public void setId(String id)
	{
		this.id = id;
	}

	public String getBillNo()
	{
		return billNo;
	}

	public void setBillNo(String billNo)
	{
		this.billNo = billNo;
	}

	public Date getTransTime()
	{
		return transTime;
	}

	public void setTransTime(Date transTime)
	{
		this.transTime = transTime;
	}

	public String getLoadGoodsPoint()
	{
		return loadGoodsPoint;
	}

	public void setLoadGoodsPoint(String loadGoodsPoint)
	{
		this.loadGoodsPoint = loadGoodsPoint;
	}

	public String getDest()
	{
		return dest;
	}

	public void setDest(String dest)
	{
		this.dest = dest;
	}

	public String getCompany()
	{
		return company;
	}

	public void setCompany(String company)
	{
		this.company = company;
	}

	public String getContractor()
	{
		return contractor;
	}

	public void setContractor(String contractor)
	{
		this.contractor = contractor;
	}

	public String getContractPhone()
	{
		return contractPhone;
	}

	public void setContractPhone(String contractPhone)
	{
		this.contractPhone = contractPhone;
	}

	public String getFax()
	{
		return fax;
	}

	public void setFax(String fax)
	{
		this.fax = fax;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public Double getFee()
	{
		return fee;
	}

	public void setFee(Double fee)
	{
		this.fee = fee;
	}

}
