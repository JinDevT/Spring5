package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;




@Component
@Data
public class MemberDTO {
	protected String ssn,name,roll,teamid,
	password,userid,gender,age;
}