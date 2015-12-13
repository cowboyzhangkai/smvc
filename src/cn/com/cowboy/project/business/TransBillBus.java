package cn.com.cowboy.project.business;

import cn.com.cowboy.project.entity.TransBill;
import cn.com.cowboy.project.utils.PageSupport;

/**
 * @author cowboy
 * @date ：2015年12月13日 下午9:09:41
 * @version 1.0
 */
public interface TransBillBus extends BaseBus<TransBill, String>
{
	/**
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public PageSupport<TransBill> findPageByExample(TransBill m, int pageNo, int pageSize);

	/**
	 * 批量删除
	 * 
	 * @param ids
	 */
	public void batchDelete(String[] ids);
}
