"use strict"//에러를 바로 내겠다. //엄격한 문법을 적용하시오. 틀리면 에러처리하라는 명령어
function Session(x){
	sessionStorage.setItem('ctx',x); //내장되어있는 객체와 메소드
	sessionStorage.setItem('script',x+'/resources/js');
	sessionStorage.setItem('style',x+'/resources/css');
	sessionStorage.setItem('img',x+'/resources/img');
	return {
		ctx :()=>{return sessionStorage.getItem('ctx');},
		script :()=>{return sessionStorage.getItem('script');},
		style :()=>{return sessionStorage.getItem('style');},
		img :()=>{return sessionStorage.getItem(img);}
	};
}