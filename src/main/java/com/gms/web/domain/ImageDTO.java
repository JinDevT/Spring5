package com.gms.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component // 스프링에서 bean으로 만들어줌
@Data // 게터세터로 사용
public class ImageDTO {
	private String imgSeq, imgName, extension, userid;
	
}