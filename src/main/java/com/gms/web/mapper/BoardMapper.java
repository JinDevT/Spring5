package com.gms.web.mapper;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.gms.web.domain.ArticleDTO;
@Repository   //context가 보고 인플리먼트를 만들어버린다.
public interface BoardMapper {
	public void insert(ArticleDTO p) ;
	public List<?> selectList(Map<?,?>p) ;
	public List<?> selectSome(Map<?,?>p) ;
	public ArticleDTO selectOne(ArticleDTO p) ;
	public int count(Map<?,?>p) ;
	public void update(ArticleDTO p) ;
	public void delete(ArticleDTO p) ;
	public int countPaging();
	public int listSearchCount();
	public ArticleDTO listCriteria();
	public ArticleDTO listPage();
	public List<ArticleDTO> listSearch();
	
}
