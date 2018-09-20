package com.gms.web.exam;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;

@Component
@Data @Lazy
public class Exam {
	String sbjSeq, examSeq, term, score, userid;
}
//부모의 값을 가지고 있고 자기의 키도 가지고 있는게 교차엔티티
//여기서 부모 : sbjSeq , userid
