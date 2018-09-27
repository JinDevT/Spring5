package com.gms.web.page;

public class PageProxy implements Proxy {
	private Pagination pagination;
	@Override
	public void carryOut(Object o) {
		this.pagination = new Pagination();
		pagination.carryOut(o);
		
	}
}
