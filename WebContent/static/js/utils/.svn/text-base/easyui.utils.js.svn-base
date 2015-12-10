/*------------------------------|
| EasyUi Utils | 			  	|
|-------------------------------|
| @author Kenny Lee	            |
|------------------------------*/
var ButtonCls = {
	ok : 'icon-ok',
	cancel : 'icon-cancel',
	save : 'icon-save',
	edit : 'icon-edit',
	remove : 'icon-remove'
};

var Messages = {
	submit : '保存',
	cancel : '取消',
	save : '创建',
	edit : '修改',
	remove : '删除',
	removeConfirm : '请确认要删除这条记录吗？删除后将不能恢复！',
	noSelected : '请先选择操作的条目!',
	dialogTitle : '提示框',
	existed : '抱歉，创建的信息已存在，请重新输入！'
};

var ResponseHelper = {
	isSuccess : function(resp) {
		return resp.success;
	},
	getCode : function(resp) {
		return resp.title;
	},
	isExisted : function(resp) {
		return this.getCode(resp) == 'EXISTED';
	},
	alert : function(resp) {
		if (this.isExisted(resp)) {
			Easyui.info(Messages.existed);
		} else {
			Easyui.error();
		}
	}
}

/*
 * DataGrip构造实体
 */
function EasyuiDatagrip() {
	this.urls = {
		list : '',
		save : '',
		edit : '',
		remove : ''
	};
	this.getURL = function() {
		return this.urls.list + '?1=1' + this.getSort();
	};
	this.getSort = function() {
		return '';
	};
	this.fieldMap = {};
	this.toolbar = new Array();
	this.datagrip_opts = {
		url : '',
		toolbar : null,
		method : 'get',
		fitColumns : true,
		singleSelect : true,
		rownumbers : true,
		pagination : true,
		// pageNumber : 0,
		columns : [],
		onLoadSuccess : function(data) {
			Easyui.emptyDataHandle(data);
		},
		queryParams : {}
	};
	this.setOpts = function(o) {
		$.extend(this.datagrip_opts, o);
	};
};

EasyuiDatagrip.prototype = new Object();

EasyuiDatagrip.prototype.constructor = 'EasyuiDatagrip';

/*
 * 进行初始化Datagrip，必须执行的方法！
 */
EasyuiDatagrip.prototype.initDatagrip = function() {
	this.setOpts({
		columns : this._getDatagripColumnsOpts(),
		url : this.getURL()
	});
	Easyui.getDatagrip().datagrid(this.datagrip_opts);
};

/*
 * 设置属性Map
 */
EasyuiDatagrip.prototype.setFieldMap = function(fieldMap) {
	this.fieldMap = fieldMap;
};

/*
 * 默认的数据格式化方法
 */
EasyuiDatagrip.prototype._getColumnsFormatterHandel = function(val, row, i) {
	var _handel = function(val, row, i) {
		return $.commons.toBooleanString(val);
	};
	return _handel;
};

/*
 * 对外的控件启动方法。
 */
EasyuiDatagrip.prototype.launch = function() {
	if (Easyui.getSelectedTab().find('.edit_dlg').size() == 0) {
		// 默认情况下如果没有edit_dlg的样式的就根据save操作的dlg进行拷贝。
		Easyui.addEditDialogFromSaveDialogCopy();
	}
	Easyui.setTabFieldMap(this.fieldMap);// 把fieldMap传入tab，便于任意实体调用
	Easyui.setTabUrls(this.urls);// 把urls传入tab，便于任意实体调用
	this.setToolbar();
	if (this.datagrip_opts.onDblClickRow == undefined) {
		this.addDblClickRowEvent();// 添加默认的双击事件到每行上
	}
	this.initDatagrip();
	this.addSearchBox();// 添加查询框
};

/*
 * 初始化datagrip之前，添加功能按钮。应当有子类重写此方法。
 */
EasyuiDatagrip.prototype.setToolbar = function() {
	if (this.toolbar == 0)
		this.datagrip_opts.toolbar = null;
	// do nothing by default
};

/*
 * 每个toolbar的属性，参考http://www.zi-han.net/case/easyui/menu&button.html#linkbutton
 * 属性
 */
EasyuiDatagrip.prototype.addButton = function(button) {
	if (button && button instanceof DgToolbar) {
		var isExisted = false;
		for ( var x in this.toolbar) {
			if (this.toolbar[x].text == button.text) {
				isExisted = true;
				break;
			}
		}
		var _button_url = button.getURL();
		if (_button_url) {
			if (isExisted == false) {
				if (this.toolbar.length > 0) {
					this.toolbar.push('-');
				}
				this.toolbar.push(button.getOpts());
				if ($.isFunction(button._init)) {
					button._init();
				}
				// 每次执行会向服务端重新发送请求，WTF。
				// Easyui.getDatagrip().datagrid({
				// toolbar : this.toolbar
				// });
				this.setOpts({
					toolbar : this.toolbar
				});
			}
		} else {
			// debug?
			// Easyui.debug(button.constructor + " url is null");
		}
	} else {
		// some alerts
	}
};

/*
 * 配置datagrip的JSON对象表头和字段显示，应当由子类重写此方法。
 * 
 * @see also http://www.zi-han.net/case/easyui/datagrid&tree.html#datagrid 列属性参考
 */
EasyuiDatagrip.prototype._getDatagripColumnsOpts = function() {
	alert(this.constructor + ' getDatagripColumnsOpts not supported yet!');
};

/*
 * 添加Datagrip的双击事件。注意要在launch之前执行才能生效。@param handler function
 * 双击时执行的事件。若不定义，默认会查看有没有edit的按钮，有的话则双击事件和修改功能一致。
 */
EasyuiDatagrip.prototype.addDblClickRowEvent = function(handler) {
	var _handler = undefined;
	if ($.isFunction(handler)) {
		_handler = handler;
	} else {
		_handler = function() {
			Easyui.getSelectedTab().find('#EditButton').click();
		}
	}
	$.extend(this.datagrip_opts, {
		onDblClickRow : _handler
	});
};

/*
 * 重置前端的name跟后端的JSON属性同步。 @param container 需要修复的容器。
 */
EasyuiDatagrip.prototype._resetInputNames = function(container) {
	Easyui.resetFormNames(container, this.fieldMap);
};

EasyuiDatagrip.prototype.load = function(params) {
	// reset property names 由于前端使用的是自己的命名，但跟服务端交互不一定一致，所以要转换。
	var queryParams = new Object();
	if (params != undefined && $.isEmptyObject(params) == false) {
		for ( var x in params) {
			var newParamName = x;
			var val = params[x];
			for ( var xx in this.fieldMap) {
				if (xx === x) {
					newParamName = this.fieldMap[xx];
					break;
				}
			}
			queryParams[newParamName] = val;
		}
	}
	Easyui.getDatagrip().datagrid('load', queryParams);
};

/*
 * 初始化查询框
 */
EasyuiDatagrip.prototype.addSearchBox = function() {
	var _this = this;
	var searchCallBack = function(value, name) {
		var p = new Object();
		if ($.trim(value).length > 0) {
			var s = Easyui.getRemoteParamName(name, _this.fieldMap);
			p[s] = $.trim(value);
		}
		_this.load(p);
	};
	if (Easyui.getSelectedTab().find('.searchbox-container').size() > 0) {
		var $toolbar = Easyui.getSelectedTab().find('.datagrid-toolbar');
		Easyui.getSelectedTab().find('.searchbox-container').appendTo($toolbar)
				.show();
		Easyui.getSelectedTab().find('#ss').searchbox({
			searcher : searchCallBack,
			menu : Easyui.getSelectedTab().find('#mm'),
			prompt : '请输入查询条件'
		});
	}
};

function DgToolbar() {
	this.constructor = 'DgToolbar';
	/*
	 * 定义默认toolbar配置参数
	 */
	this.opts = {
		// LinkButton Properties
		width : null,
		height : null,
		id : 'null',
		disabled : false,
		toggle : false,
		selected : false,
		plain : true,
		text : '按钮',
		iconCls : ButtonCls.save,// A CSS class to display a 16x16 icon on
		// left.
		iconAlign : 'left',
		size : 'small',
		handler : function() {// 点击事件
			alert('click');
		}
	};

	this.url = '';

	this.getURL = function() {
		return this.url;
	};

	/*
	 * 完全自定义toolbar配置参数，会覆盖上面的opts参数进行定义。
	 */
	this.custom = undefined;
	/*
	 * 定义button默认执行的方法
	 */
	this._init = undefined;
	/*
	 * 修改默认的opts
	 */
	this.setOpts = function(o) {
		$.extend(this.opts, o);
	};
	/*
	 * 获取构造参数，若定义了DgToolbar.custom则已custom为准，否则返回opts。
	 */
	this.getOpts = function() {
		if (this.custom) {
			return this.custom;
		} else {
			return this.opts;
		}
	};

	this._onClick = function() {
	};
};

/*
 * 基础的easyui辅助dialog抽象类
 */
function DialogInterface() {
	this.dlg = {};
	this.fm = {};
	this.title = Messages.dialogTitle;
	this.url = '';

	this.selector = '';

	this.getDialog = function() {
		return this.dlg;
	};

	this.setDialog = function(dialog) {
		this.dlg = dialog;
		this.fm = this.dlg.find('.fm');
	};

	this.getFm = function() {
		return this.fm;
	};
	this.setTitle = function(s) {
		this.title = s;
	};
	this.getTitle = function() {
		return this.title;
	};
	this.setURL = function(l) {
		this.url = l;
	};
	this.getURL = function() {
		return this.url;
	};

	/*
	 * 定义显示dialog时的前置事情，可以不定义。一般用作初始化构造一些dialog中的初始值。若需要异步加载数据，可在这里实现初始化.
	 */
	this._beforeDialogShow = function() {
		// do something
	};

	/*
	 * 定义dialog点击提交按钮触发的执行事件。 @return function
	 */
	this.submitHandler = function() {
		// do something
	};

	/*
	 * 定义初始化完dialog后的添加的validate事件。可什么都不干。
	 */
	this.validate = function() {
		// do something
	};
}

/*
 * 初始化dialog的执行函数。 @param dlg 原始的dialog jQuery对象。 @param title 生成easyui
 * Dialog后的标题。
 */
DialogInterface.prototype.initOpts = function(dlg, title) {
	this.setDialog(dlg);
	this.setTitle(title);

	var b = Easyui.generateDialogButtonsOpts(this.getDialog(), this
			.submitHandler());
	this.getDialog().show();
	this.getDialog().dialog({
		title : this.getTitle(),
		buttons : b,
		closed : true
	});

	this.validate();
};

/*
 * 定义dialog被触发时的事件。注：open之前必须执行了init操作！
 */
DialogInterface.prototype.open = function() {
	if (this.getDialog() == false) {
		alert('Do init method before, please!');
	} else {
		this.getFm().form('clear');
		this._beforeDialogShow();
		this.getDialog().dialog('open');
	}
};

function SaveDialog() {
	this.setTitle(Messages.save);
	this.selector = '.dlg';
	this.method = 'post';
};

SaveDialog.prototype = new DialogInterface();

SaveDialog.prototype.constructor = 'SaveDialog';

/*
 * <p>定义提交操作成功后的回调函数，每个子类必须定义此方法！</p> @return function
 */
SaveDialog.prototype._afterSubmitSuccessHandler = function() {
	return function() {
		alert(this.constructor + ' afterSaveSuccessHandler not supported yet!');
	};
};

/*
 * 定义dialog点击提交按钮触发的执行事件。 @return function
 */
SaveDialog.prototype.submitHandler = function() {
	var _this = this;
	var _h = function() {
		_this.getFm().attr('method', _this.method);
		_this.getFm().form('submit', {
			url : _this.getURL(),
			onSubmit : function() {
				var isValid = true;
				try {
					isValid = $(this).form('validate');
				} catch (e) {
					Easyui.debug(e);
				}
				// Easyui.debug(_this.getFm().serialize());
				return isValid;
			},
			success : _this._afterSubmitSuccessHandler(),
			onLoadError : function() {
				easyui.error('抱歉，系统出错。提交失败！');
			}
		});
	};
	return _h;
};

function EditDialog() {
	this.setURL(Messages.edit);
	this.selector = '.edit_dlg';
	this.method = 'get';
};

EditDialog.prototype = new SaveDialog();

EditDialog.prototype.constructor = 'EditDialog';

EditDialog.prototype.open = function() {
	var row = Easyui.getSelectedRow();
	if (row) {
		var $dlg = this.getDialog();
		var $fm = this.getFm();
		$dlg.dialog('open');
		$fm.form('clear');
		$fm.form('load', row);
		var idValue = Easyui.getSelectedRowId();
		if ($fm.find('[name="' + Easyui.idName + '"]').size() == 0) {
			var idInput = $('<input>', {
				type : 'hidden',
				name : Easyui.idName,
				value : idValue
			});
			$fm.append(idInput);
		} else {
			$fm.find('[name="' + Easyui.idName + '"]').val(idValue);
		}
		this._beforeDialogShow();
	} else {
		Easyui.info(Messages.noSelected);
	}
};

function SaveButton(l, txt) {
	this.text = txt ? txt : Messages.save;
	this.iconCls = ButtonCls.save;
	this.url = l;
	this.opts.id = 'SaveButton';

	var dlg = undefined;
	this.setDialog = function(d) {
		if (d instanceof DialogInterface) {
			dlg = d;
			dlg.setURL(this.url);
		} else {
			alert('bad param of dialog, must be DialogInterface instance!');
		}
	};
	this.getDialog = function() {
		return dlg;
	};
}

SaveButton.prototype = new DgToolbar();

SaveButton.prototype.constructor = 'SaveButton';

/*
 * 构造button被点击的回调函数。@return function
 */
SaveButton.prototype._onClick = function() {
	var _this = this;
	var handler = function() {
		_this.dlg.open();
	};
	return handler;
};

/*
 * 初始化按钮和按钮关联dialog
 */
SaveButton.prototype._init = function() {
	var $dlg = this._getDialogBaseObject();
	if ($dlg.size() > 0) {
		var dialog = this.getDialog();
		dialog.initOpts($dlg, this.text);
		this.setOpts({
			handler : function() {
				dialog.open();
			},
			text : this.text,
			iconCls : this.iconCls
		});
	} else {
		alert('cant find base dialog jQuery object from selector: '
				+ this.getDialog().selector + ' !');
	}
};

/*
 * 获取dialog初始化前的基础jQuery对象。
 */
SaveButton.prototype._getDialogBaseObject = function() {
	return Easyui.getSelectedTab().find(this.getDialog().selector);
};

function EditButton(l, txt) {
	this.text = txt ? txt : Messages.edit;
	this.iconCls = ButtonCls.edit;
	this.url = l;
	this.opts.id = 'EditButton';

	var dlg = undefined;
	this.setDialog = function(d) {
		if (d instanceof DialogInterface) {
			dlg = d;
			dlg.setURL(this.url);
		} else {
			alert('bad param of dialog, must be DialogInterface instance!');
		}
	};
	this.getDialog = function() {
		return dlg;
	};
};

EditButton.prototype = new DgToolbar();

EditButton.prototype.constructor = 'EditButton';

EditButton.prototype._onClick = function() {
	return SaveButton.prototype._onClick.apply(this, arguments);
};

EditButton.prototype._init = function() {
	SaveButton.prototype._init.apply(this, arguments);
};

EditButton.prototype._getDialogBaseObject = function() {
	return Easyui.getSelectedTab().find(this.getDialog().selector);
};

function RemoveButton(l, txt) {
	var confirmFieldName = undefined;
	this.text = txt ? txt : Messages.remove;
	this.iconCls = ButtonCls.remove;
	this.opts.id = 'RemoveButton';

	this.url = l;

	this.getConfirmFieldName = function() {
		return confirmFieldName;
	};
	this.setConfirmFieldName = function(fieldName) {
		confirmFieldName = fieldName;
	};

}

RemoveButton.prototype = new DgToolbar();

RemoveButton.prototype.constructor = 'RemoveButton';

RemoveButton.prototype._init = function() {
	this.setOpts({
		handler : this._onClick(),
		text : this.text,
		iconCls : this.iconCls
	});
};

/*
 * 获取删除时的提示信息 @return String
 */
RemoveButton.prototype._getRemoveConfirmMsg = function() {
	var msg = Messages.removeConfirm;
	if (this.getConfirmFieldName() != undefined) {
		var fieldName = this.getConfirmFieldName();
		if (Easyui.getSelectedRow()[fieldName]) {
			msg = '你确认要删除 ' + Easyui.getSelectedRow()[fieldName] + ' 吗? ';
		}
	}
	return msg;
};

/*
 * 获取删除操作时的参数
 */
RemoveButton.prototype._getRemoveParams = function() {
	return {
		id : Easyui.getSelectedRowId()
	};
};

RemoveButton.prototype._onClick = function() {
	var _this = this;
	var handler = function() {
		var row = Easyui.getSelectedRow();
		if (row) {
			var msg = Messages.removeConfirm;
			if (msg !== _this._getRemoveConfirmMsg()) {
				msg = _this._getRemoveConfirmMsg();
			}
			var _url = _this.getURL();
			$.messager.confirm('确认提示', msg, function(r) {
				if (r) {
					$.getJSON(_url, _this._getRemoveParams(), function(result) {
						if (result.success) {
							Easyui.getDatagrip().datagrid('reload');
						} else {
							Easyui.error();
						}
					});
				}
			});
		} else {
			Easyui.info(Messages.noSelected);
		}
	};
	return handler;
};

var Easyui = {
	contentSelector : '#tt',
	/*
	 * 默认id的fieldName
	 */
	idName : 'id',

	setTabFieldMap : function(fieldMap) {
		this.getSelectedTab().data('fieldMap', fieldMap);
	},
	getTabFieldMap : function() {
		return this.getSelectedTab().data('fieldMap');
	},
	setTabUrls : function(urls) {
		this.getSelectedTab().data('urls', urls);
	},
	getTabUrls : function() {
		return this.getSelectedTab().data('urls');
	},
	addTab : function(_title, _url, _isIframe, _icon) {
		var $tt = $(this.contentSelector);
		var _options = {
			title : _title,
			closable : true,
			fit : false
		};
		_url = SysConfig.url.base + _url;
		if (_icon) {
			_options.iconCls = _icon;
		}
		if (_isIframe) {
			var _height = $('#main')[0] ? ($('#main').height() - 31) + 'px'
					: '100%';
			_options.content = '<iframe scrolling="auto" frameborder="0"  src="'
					+ _url
					+ '" style="width:100%;height:'
					+ _height
					+ ';"></iframe>';
		} else {
			_options.href = _url;
		}
		if ($tt.tabs('exists', _title)) {
			$tt.tabs('select', _title);
			/* Easyui 1.3 IE6 下会报错 */
			// var tab = $tt.tabs('getSelected');
			// $tt.tabs('update', {
			// tab : tab
			// });
		} else {
			$tt.tabs('add', _options);
		}
	},
	/*
	 * 构造Dialog用的提交和关闭按钮参数。 @param dlg button所属的dialog对象 @param handler 提交的事件句柄。
	 */
	generateDialogButtonsOpts : function(dlg, handler) {
		return [ {
			text : Messages.submit,
			iconCls : ButtonCls.ok,
			handler : handler
		}, {
			text : Messages.cancel,
			iconCls : ButtonCls.cancel,
			handler : function() {
				dlg.dialog('close');
			}
		} ];
	},
	/*
	 * 获取当前tab对象
	 */
	getSelectedTab : function() {
		return $(this.contentSelector).tabs('getSelected');
	},
	/*
	 * 获取当前tab中的datagrip jQuery对象
	 */
	getDatagrip : function() {
		return this.getSelectedTab().find('.dg');
	},
	/*
	 * 获取当前选择的row
	 */
	getSelectedRow : function() {
		return this.getDatagrip().datagrid('getSelected');
	},
	getSelectedRowId : function() {
		var idFieldName = this.getTabFieldMap() ? this.getTabFieldMap()[this.idName]
				: this.idName;
		return this.getSelectedRow() ? this.getSelectedRow()[idFieldName]
				: null;
	},
	/*
	 * 重置前端container表单内的name为remoteJSON映射的名字。
	 */
	resetFormNames : function(container, fieldMap) {
		for ( var fieldId in fieldMap) {
			var prop = fieldMap[fieldId];
			var $inputs = container.find('[name^="' + fieldId + '"]');
			if ($inputs.size() > 0) {
				var oriName = $inputs.attr('name');
				// Easyui.debug(oriName);
				$inputs.attr('name', oriName.replace(fieldId, prop));
			}
		}
	},
	/*
	 * 把name转成remote的JSON对应的名字。
	 */
	getRemoteParamName : function(oriName, fieldMap) {
		var s = oriName;
		for ( var fieldId in fieldMap) {
			if (oriName.indexOf(fieldId) == 0) {
				s = oriName.replace(fieldId, fieldMap[fieldId])
				break;
			}
		}
		return s;
	},
	emptyDataHandle : function(data) {
		if (data.page == undefined) {
			this.debug('请从服务器上返回分页参数page，不然当前页码没数据的时候会出现提示重复的情况！');
		} else {
			// 由于当前页没数据的时候easyui会自动查询前一页所以0的时候才代表没数据。
			if (data.page < 1 && data.total < 1) {
				$.messager.show({
					title : '提示',
					msg : '抱歉，找不到任何数据！',
					timeout : 3000,
					showType : 'slide'
				});
			}
		}
	},
	addEditDialogFromSaveDialogCopy : function() {
		var $saveDialog = this.getSelectedTab().find('.dlg');
		if ($saveDialog.size() > 0) {
			var editDialog = $saveDialog.clone();
			editDialog.removeClass('dlg').addClass('edit_dlg');
			this.getSelectedTab().append(editDialog);
		} else {
			alert('cant find saveDialog');
		}
	},
	error : function(msg) {
		var m = msg ? msg : '抱歉，操作失败!';
		$.messager.alert('错误', m);
	},
	warn : function(msg) {
		var m = msg ? msg : '警告信息!';
		$.messager.alert('警告', m);
	},
	info : function(msg) {
		var m = msg ? msg : '提示信息!';
		$.messager.alert('提示 ', m);
	},
	debug : function(msg) {
		try {
			console.debug(msg);
		} catch (e) {
		}
	},
	resetTreeMenu : function() {// 根据权限配置重置树形菜单
		if (TreeMenuConfig != undefined && TreeMenuConfig.length > 0) {
			for ( var x in TreeMenuConfig) {
				var p = TreeMenuConfig[x];
				if ($(p.selector).size() > 0) {
					if (Security.hasAnyGranted(p.role) == false) {
						$(p.selector).parent().parent().remove();
					}
				} else {
					alert('cant find any object by ' + p.selector);
				}
			}
			// finally clear empty folders
			$('.nav li').each(function(i) {
				if ($(this).find('UL').size() > 0) {
					if ($(this).find('UL .tree-node').size() == 0) {
						$(this).remove();
					}
				}
			});
		} else {
			try {
				console.debug('TreeMenuConfig is undefined');
			} catch (e) {
			}
		}
	}
};
