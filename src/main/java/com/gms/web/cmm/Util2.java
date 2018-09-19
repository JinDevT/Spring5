package com.gms.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import org.springframework.stereotype.Component;

import com.gms.web.mbr.Member;
@Component
public class Util2 {
	public Function<Member,Member> getAgeAndGender =(Member mbr)-> {
		String age =
				String.valueOf(Integer.parseInt(new SimpleDateFormat("yyyy")
				.format(new Date()))-(Integer.parseInt(mbr.getSsn().substring(0, 2))+1900-1));

			String gender = "";
			switch(mbr.getSsn().split("-")[1]){
			case "1": case "3":
				gender = "남자";
				break;
			case "2": case "4":
				gender = "여자";
				break;
			}
			mbr.setAge(age);
			mbr.setGender(gender);
					return mbr;
	};
}
