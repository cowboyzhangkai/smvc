package cn.com.cowboy.project.entity;

import java.io.Serializable;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.hibernate.annotations.GenericGenerator;

public abstract class BaseEntity<ID extends Serializable> extends AbstractEntity<ID>
{

	private static final long serialVersionUID = 2219567092383855924L;

	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "org.hibernate.id.UUIDGenerator")
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
