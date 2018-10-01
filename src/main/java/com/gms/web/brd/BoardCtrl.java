package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.gms.web.cmm.Util;
import com.gms.web.page.PageProxy;
import com.gms.web.page.Pagination;
import com.gms.web.brd.Board;


@RestController

public class BoardCtrl {
	static final Logger logger =  LoggerFactory.getLogger(BoardCtrl.class);
	 //set만 하는거임. 선언이 아니고 객체로 만드는 거임. 싱글톤의 getInstance와 같다. 스프링에서 가져오는 싱글톤 객체
	@Autowired Pagination page;
	@Autowired Board brd;
	@Autowired BoardMapper brdMapper;
	
	@Autowired HashMap<String,Object> map;
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody Map<String,Object> list(@PathVariable String pageNo){
		logger.info("--BoardCtrl :::{} 페이지 번호::::",pageNo);
		map.clear();
		map.put("pageNumber", Integer.parseInt(pageNo));
		Util.log.accept("전체게시글 수::"+brdMapper.countAll());
		map.put("rowCount", brdMapper.countAll());
		page.carryOut(map);
		//rowCount,existPrev,prevBlock,beginPage,endPage,existNext,nextBlock
		Util.log.accept("rowCount::"+page.getRowCount());
		Util.log.accept("existPrev::"+page.isExistPrev());
		Util.log.accept("prevBlock::"+page.getPrevBlock());
		Util.log.accept("beginPage::"+page.getBeginPage());
		Util.log.accept("endPage::"+page.getEndPage());
		Util.log.accept("existNext::"+page.isExistNext());
		Util.log.accept("nextBlock::"+page.getNextBlock());
		
		List<Board> list = brdMapper.listAll(page);
		Util.log.accept("게시글 리스트::"+list);
		map.clear();
		map.put("list", list);
		map.put("page", page);
		return map;
		}
	
	@RequestMapping("/boards/{id}/{pageNo}")
	public @ResponseBody Map<String,Object> myList(@PathVariable String id, @PathVariable int pageNo){
		logger.info("--BoardCtrl :::{} 페이지 번호::::",pageNo);
		map.clear();
		map.put("pageNumber", pageNo);
		map.put("rowCount", brdMapper.myCount(id));
		page.carryOut(map);
		map.put("userid", id); //쿼리의 키값이랑 동일해야한다.
		map.put("beginRow", page.getBeginRow());
		map.put("endRow", page.getEndRow());
		List<Board> list = brdMapper.myList(map);
		
		map.clear();
		map.put("list", list);
		map.put("page", page);
		map.put("id", id);
		Util.log.accept("게시글 리스트::"+list);
		Util.log.accept("아이디::"+id);
		Util.log.accept("게시글 리스트::"+page);
		return map;
	}
	@RequestMapping("/boards/create")
	public @ResponseBody Board create(@RequestBody Board brd){
		Util.log.accept("작가::"+brd.getWriter());
		Util.log.accept("내용::"+brd.getContent());
		Util.log.accept("제목::"+brd.getTitle());
		brdMapper.create(brd);
		return brd;
		
	}
}
