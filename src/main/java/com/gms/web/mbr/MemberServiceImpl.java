package com.gms.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceImpl implements MemberService {
	@Autowired MemberMapper memberDAO;
	@Override
	public void add(Member p) {
		String age =String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy")
								.format(new Date()))-(Integer.parseInt(p.getSsn().substring(0, 2))+1900-1));
		
		String gender = "";
		switch(p.getSsn().split("-")[1]){
		case "1": case "3":
			gender = "남자";
			break;
		case "2": case "4":
			gender = "여자";
			break;
		}
		p.setAge(age);
		p.setGender(gender);
		System.out.println("나이::::"+age);
		System.out.println("성별::::"+gender);
		memberDAO.insert(p);
		
	}

	@Override
	public List<?> list(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<?> search(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Member retrieve(Member p) {
		System.out.println("---MemberService retrieve 입장---");
		return memberDAO.selectOne(p);
	}

	@Override
	public int count(Map<?, ?> p) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void modify(Member p) {
		System.out.println("---MemberService modify 입장---");
		System.out.println("아이디>>>"+p.getUserid());
		System.out.println("바뀐비밀번호>>>"+p.getPassword());
		System.out.println("바뀐역할>>>"+p.getRoll());
		System.out.println("바뀐팀>>>"+p.getTeamid());
		memberDAO.update(p);
		
	}

	@Override
	public void remove(Member p) {
		System.out.println("---MemberService remove 입장---");
		System.out.println("아이디>>>"+p.getUserid());
		System.out.println("비밀번호>>>"+p.getPassword());
		memberDAO.delete(p);
		
	}

	@Override
	public boolean login(Member p) {
		System.out.println("---MemberDTO login 입장--");
		System.out.println(p.getUserid());
		System.out.println(p.getPassword());
		System.out.println("loginDTO:" + memberDAO.login(p));
		return (memberDAO.login(p)!=null);
		
	}

}
