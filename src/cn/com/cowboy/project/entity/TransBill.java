package cn.com.cowboy.project.entity;

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
	private String transTime;

	/**
	 * 起始地点
	 */
	private String fromStation;

	/**
	 * 到站
	 */
	private String toStation;

	/**
	 * 托运单位/个人
	 */
	private String transCompany;

	/**
	 * 托运单位联系电话
	 */
	private String transPhone;

	/**
	 * 收货单位/个人
	 */
	private String destCompany;

	/**
	 * 收获单位联系电话
	 */
	private String destTel;

	/**
	 * 收货单位联系手机
	 */
	private String destPhone;

	/**
	 * 收货单位联系地址
	 */
	private String destAddress;

	/**
	 * 交付方式
	 */
	private String payType;

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

	public String getTransTime()
	{
		return transTime;
	}

	public void setTransTime(String transTime)
	{
		this.transTime = transTime;
	}

	public String getFromStation()
	{
		return fromStation;
	}

	public void setFromStation(String fromStation)
	{
		this.fromStation = fromStation;
	}

	public String getToStation()
	{
		return toStation;
	}

	public void setToStation(String toStation)
	{
		this.toStation = toStation;
	}

	public String getTransCompany()
	{
		return transCompany;
	}

	public void setTransCompany(String transCompany)
	{
		this.transCompany = transCompany;
	}

	public String getTransPhone()
	{
		return transPhone;
	}

	public void setTransPhone(String transPhone)
	{
		this.transPhone = transPhone;
	}

	public String getDestCompany()
	{
		return destCompany;
	}

	public void setDestCompany(String destCompany)
	{
		this.destCompany = destCompany;
	}

	public String getDestTel()
	{
		return destTel;
	}

	public void setDestTel(String destTel)
	{
		this.destTel = destTel;
	}

	public String getDestPhone()
	{
		return destPhone;
	}

	public void setDestPhone(String destPhone)
	{
		this.destPhone = destPhone;
	}

	public String getDestAddress()
	{
		return destAddress;
	}

	public void setDestAddress(String destAddress)
	{
		this.destAddress = destAddress;
	}

	public String getPayType()
	{
		return payType;
	}

	public void setPayType(String payType)
	{
		this.payType = payType;
	}

}
