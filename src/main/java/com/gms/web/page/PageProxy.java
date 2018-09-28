package com.gms.web.page;

import java.util.Map;

public class PageProxy implements Proxy {
	private Pagination pagination;
	@Override
	public void carryOut(Map<?, ?> param) {
		this.pagination=new Pagination();
		pagination.carryOut(param);
	}
}
