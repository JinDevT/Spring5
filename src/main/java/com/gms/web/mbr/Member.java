package com.gms.web.mbr;

import org.springframework.stereotype.Component;

import lombok.Data;




@Component
@Data
public class Member {
	protected String ssn,name,roll,teamid,
	password,userid,gender,age;
}