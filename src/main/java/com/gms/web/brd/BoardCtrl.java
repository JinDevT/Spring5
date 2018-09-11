package com.gms.web.brd;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
@RequestMapping("/board")
public class BoardCtrl {
	static final Logger logger =  LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired Article article; //set만 하는거임. 선언이 아니고 객체로 만드는 거임. 싱글톤의 getInstance와 같다.
	@Autowired BoardService boardService;
	@RequestMapping(value= "/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("article") Article article) {
		logger.info("---articleContoller add {}--");
		
		return "redirect:/";
	}
	@RequestMapping("/list")
	public void list() {}
	@RequestMapping("search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}




}
