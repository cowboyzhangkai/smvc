package cn.com.cowboy.project.entity;

import java.io.Serializable;

public abstract class BaseEntity<ID extends Serializable> extends AbstractEntity<ID>
{

	private static final long serialVersionUID = 2219567092383855924L;

	private ID id;

	public ID getId()
	{
		return this.id;
	}

	public void setId(ID paramID)
	{
		this.id = paramID;
	}

}
