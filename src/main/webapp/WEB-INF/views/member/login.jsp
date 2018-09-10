<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="contentBox">
	<h2>사용자로그인</h2><br />
		<form id ="loginForm" name ="loginForm"<%-- action="${context}/member.do" --%>>
			USER_ID: <input type="text" id="userid" name="userid" />
			PASSWORD: <input type="password" id="password" name="password"/>
			
			<input id="login_submit" type="button" value="LOGIN"> <!-- Btn 버튼이라는 뜻이다. -->
		</form>
</div>
<script>	
$('#login_submit').click(function(){ 
	 alert('떠라제발.. 응 안떠 망했어'); 
	$('#loginForm')
	.attr({
		action: '${context}/member/login',
		method: "post"
	})
	.submit(); 

});

</script>
