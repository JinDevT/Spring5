<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id = "contentBox"></div>
	<div id="joinForm-layout" >
			<h2>회원가입</h2>
			<form id="joinForm" name="joinForm" >
				NAME: <input type="text" id="name" name="name" required /> <br />
				USER_ID: <input type="text" id="userid" name="userid" required /><br />
				PASSWORD: <input type="password" id="password" name="password" required/><br />
				SSN(EX)930217-1): <input type="text" id="ssn" name="ssn" required/><br />
				<!-- <input type="hidden" name="action" value="JOIN" /> -->
				<input type="hidden" name="page" value="login" /> 
				<!-- <input type="hidden" name="gender" />
				<input type="hidden" name="age"  /> -->
				<input id="joinFormBtn" type="button" value="JOIN"><br />
			소속팀
				<input type="radio" id = "teamid" name="teamid"
					value="none" checked="checked" />없음
				<input type="radio" id = "teamid" name="teamid"
					value="ATEAM"  />걍놀자
				<input type="radio" id = "teamid" name="teamid"
					value="HTEAM"  />지은이네
				<input type="radio" id = "teamid" name="teamid"
					value="STEAM"  />왕거북이
				<input type="radio" id = "teamid" name="teamid"
					value="CTEAM"  />코딩짱<br />
					
			프로젝트역할
				<select name="roll" id="roll">
					<option value="Leader">팀장</option>
					<option value="front">프론트개발</option>
					<option value="back">백단개발</option>
					<option value="android">안드로이드개발</option>
					<option value="minfe">민폐</option>
				</select><br />
			
			수강과목
				<input type="checkbox" name = "subject"
					value="java" checked="checked" />Java
				<input type="checkbox" name = "subject" value="clang" />C언어
				<input type="checkbox" name = "subject" value="JSP" />JSP
				<input type="checkbox" name = "subject" value="PHP" />PHP
				<input type="checkbox" name = "subject" value="nodejs" />NodeJS
				<input type="checkbox" name = "subject" value="linux" />Linux
				<input type="checkbox" name = "subject" value="html" />HTML
				<input type="checkbox" name = "subject" value="spring" />Spring<br />
			</form>
			</div>
		
</body>
</html> 
<script>
$('#joinFormBtn').click(()=>{
	alert('joinFormBtn click !!');
	$('#joinForm').attr({
		action: "${context}/member/add",
		method: "post"
	})
	.submit(); 
	
});

</script>