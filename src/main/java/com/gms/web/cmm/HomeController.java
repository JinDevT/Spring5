package com.gms.web.cmm;



import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * Handles requests for the application home page.
 */
@Controller

public class HomeController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/") //겟방식을 생략하면 이렇게 사용할 수 있
	public String home(HttpServletRequest request, Model model) {
		model.addAttribute("context", Util.ctx.apply(request));
		return "main";
	} 
	@RequestMapping("/move/{prefix}/{dir}/{page}")
	public String move(
			@PathVariable String prefix,
			@PathVariable String dir,
			@PathVariable String page
			) {
		logger.info("HomeController ::: move() {}.","ENTER");
		String path = prefix+":"+dir+"/"+page+".tiles";
		
		logger.info(path);
		return path;
	}
	
}