package com.gms.web.mbr;

import java.util.function.Function;
import java.util.function.Predicate;

import javax.servlet.http.HttpSession;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;

//
@Controller
@RequestMapping("/member")
@SessionAttributes("user")
public class MemberCtrl {
	static final Logger logger =  LoggerFactory.getLogger(MemberCtrl.class);
	 //set만 하는거임. 선언이 아니고 객체로 만드는 거임. 싱글톤의 getInstance와 같다. 스프링에서 가져오는 싱글톤 객체
	@Autowired MemberService memberService;
	@Autowired MemberMapper mbrMapper;
	@RequestMapping(value= "/add", method=RequestMethod.POST)
	public String add(@ModelAttribute("member") Member member) {
		logger.info("---MemberContoller add {}--");
		memberService.add(member);
		
		System.out.println("name is "+member.getName());
		return "redirect:/";
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
		memberService.modify(member); // 값이 바뀌는 지점
		
		 
		return "/move/public/member/retrieve";
		
	}
	@RequestMapping(value="/remove", method = RequestMethod.POST)
	public String remove(@ModelAttribute("member") Member member,
						 @ModelAttribute("user") Member user) {
		logger.info("---MemberContoller remove {}--");
		member.setUserid(user.getUserid());
		System.out.println("아이디떠랑><"+member.getUserid()+"///"+member.getPassword());
		memberService.remove(member);
		return "redirect:/";
		
	}
	@RequestMapping(value="/login", method=RequestMethod.POST)
	public String login(@ModelAttribute("member") Member param, Model model) {
		logger.info("---MemberContoller login {}--");
		Predicate<String> p = s-> !s.equals("");
		System.out.println(">>>>>>>>>"+param.getUserid());
		String r = mbrMapper.exist(param.getUserid());
		System.out.println("+++++++"+r);
		boolean b = p.test(r);
		System.out.println(":::::::::::"+b);
		if(b) {
			Function<Member,Member> f = (t)->{
				return mbrMapper.selectOne(t);
		};
		System.out.println("param id >>"+param.getUserid());
		System.out.println("param pw >>"+param.getPassword());
		Member s2 = f.apply(param);
		model.addAttribute("user",s2);
		System.out.println("88888 :: "+s2);
		System.out.println("로그인성공!!");
			return "login_success";
		}else {
			System.out.println("로그인실패!");
			return "redirect:/move/public/member/login";
		}
			
			
		
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
	@RequestMapping("/logout")
	public String logout() {
		logger.info("---MemberContoller logout {}--");
		return "redirect:/";
	}
	@RequestMapping("/fileupload")
	public void fileupload() {}
	
}