package com.gms.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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
	@RequestMapping("/boards/{pageNo}")
	public @ResponseBody List<Board> list(@PathVariable String pageNo){
		logger.info("--BoardCtrl :::{} 페이지 번호::::"+pageNo);
		page.carryOut(Integer.parseInt(pageNo));
		
		List<Board> list = brdMapper.listAll(page);
		Util.log.accept("게시글 리스트::"+list);
		return list;
		}
}
