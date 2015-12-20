package cn.com.cowboy.project.business;

import cn.com.cowboy.project.entity.TransBillFlow;
import cn.com.cowboy.project.utils.PageSupport;

/**
 * @author cowboy
 * @date ：2015年12月19日 上午11:20:32
 * @version 1.0
 */
public interface TransBillFlowBus extends BaseService<TransBillFlow, String>
{
	/**
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public PageSupport<TransBillFlow> findPageByExample(TransBillFlow m, int pageNo, int pageSize);

	/**
	 * 批量删除
	 * 
	 * @param ids
	 */
	public void batchDelete(String[] ids);
}
