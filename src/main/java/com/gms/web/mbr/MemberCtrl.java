package com.gms.web.mbr;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;




import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.ModelAttribute;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.gms.web.cmm.Util;


//
@RestController
@RequestMapping("/member")
public class MemberCtrl {
	static final Logger logger =  LoggerFactory.getLogger(MemberCtrl.class);
	 //set만 하는거임. 선언이 아니고 객체로 만드는 거임. 싱글톤의 getInstance와 같다. 스프링에서 가져오는 싱글톤 객체
	@Autowired MemberMapper mbrMapper;
	@Autowired Member mbr;
	
	@PostMapping("/add")
	public @ResponseBody Map<String,Object> add(@RequestBody Member param) {
		logger.info("---MemberContoller add {}--");
		Map<String,Object> rmap = new HashMap<>();
		Util.log.accept("넘어온 회원가입정보::"+param.toString());
		
	
		
		
		return rmap;
	}
	
	/*@RequestMapping("/list")
	public void list() {}
	@RequestMapping("search")
	public void search() {}
	@RequestMapping("/retrieve")
	public void retrieve() {}
	@RequestMapping("/count")
	public void count() {}*/
	
	@RequestMapping(value="/modify", method = RequestMethod.POST)
	public String modify(@ModelAttribute("member") Member member,
						 @ModelAttribute("user") Member user) {
		logger.info("---MemberContoller modify {}--");
		System.out.println("Modfiy 비밀번호 : "+member.getPassword());
		member.setUserid(user.getUserid());
		
		
		 
		return "/move/public/member/retrieve";
		
	}
	@RequestMapping(value="/remove", method = RequestMethod.POST)
	public String remove(@ModelAttribute("member") Member member,
						 @ModelAttribute("user") Member user) {
		logger.info("---MemberContoller remove {}--");
		member.setUserid(user.getUserid());
		System.out.println("아이디떠랑><"+member.getUserid()+"///"+member.getPassword());
		
		return "redirect:/";
		
	}
	@PostMapping("/login")
	public @ResponseBody Map<String,Object> login(@RequestBody Member param) {
		logger.info("---MemberContoller login {}--");
		Map<String,Object> rmap = new HashMap<>();
	
      
        String pwValid = "WRONG";
        String idValid = "WRONG";
        if (mbrMapper.count(param)!=0) {
            idValid = "CORRECT";
            Function<Member,Member> f = (t)->{
                return mbrMapper.get(t);
            };
            mbr = f.apply(param);
            pwValid= (mbr != null)?"CORRECT":"WRONG";
            mbr = (mbr != null) ?mbr:new Member();
        }
        rmap.put("ID", idValid);
        rmap.put("PW", pwValid);
        rmap.put("MBR", mbr);
     
		return rmap;
	
			
			
		
		/*String page ="";
		System.out.println("--------------- login -------------");
		System.out.println("memservice : "+memberService.login(param));
		if(memberService.login(param)){
			logger.info("--로그인 성공---");
			model.addAttribute("user",memberService.retrieve(param));
			page = "login_success";
			
		}else {
			logger.info("--로그인 실패---");
			page = "redirect:/move/public/member/login";
		}
		
		return page;*/
	
		
		
	}
/*	@RequestMapping("/logout")
	public String logout() {
		logger.info("---MemberContoller logout {}--");
		return "redirect:/";
	}*/
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
}