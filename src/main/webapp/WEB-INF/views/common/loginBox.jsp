<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="login-box">
			<a id="moveLoginForm">LOGIN</a>
			&nbsp;&nbsp;
			<a id="moveJoinForm">JOIN</a>
			
</div>
<script>

document.getElementById('moveLoginForm').
	addEventListener('click',function(){ //콜백함수 : 펑션이 호출되니까 뒤에있는 녀석이 이어서 따라오는 것 이벤트에 걸리는거.
	
	alert('클릭 이벤트 체크!!');
	router.move({
		context :'${context}',
		domain : 'member',
		action : 'move',
		page : 'login'});
	
});


document.getElementById('moveJoinForm')
	.addEventListener('click',function(){
	alert('회원가입 가즈아아아아');
	router.move({
		context : '${context}',
		domain : 'member',
		action : 'move',
		page : 'add'});
});
</script>
