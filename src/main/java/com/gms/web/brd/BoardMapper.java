package com.gms.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
@Repository   //context가 보고 인플리먼트를 만들어버린다.
public interface BoardMapper {
	public void insert(Article p) ;
	public List<?> selectList(Map<?,?>p) ;
	public List<?> selectSome(Map<?,?>p) ;
	public Article selectOne(Article p) ;
	public int count(Map<?,?>p) ;
	public void update(Article p) ;
	public void delete(Article p) ;
	public int countPaging();
	public int listSearchCount();
	public Article listCriteria();
	public Article listPage();
	public List<Article> listSearch();
	
}
