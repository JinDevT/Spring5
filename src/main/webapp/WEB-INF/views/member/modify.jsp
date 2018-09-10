<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id ="contextBox" style = "margin:auto; text-align:center;" >
<form id="updateForm" name = "updateForm" >
<table style = "width:50%; height:250px; margin:auto; text-align:center">
	<tr>
		<td rowspan="3" colspan="2" width=40%>
		<img src="" style ="height: 160px; width: 100%" alt="" /></td>
		<td>이름</td>
		<td id="name">${user.name}</td>
	</tr>
	<tr>
		<td>아이디</td>
		<td id ="userid">${user.userid}</td>
		<!-- <input type="hidden" name="userid" value=${user.userid} /> -->
	</tr>
	<tr>
		<td>비밀번호</td>
		<td>
		<input id="password" type="text" name="password" />
		</td>
	</tr>
	<tr>
		<td>나이</td>
		<td id="age">${user.age}</td>
		<td>역할</td>
		<td>
		<select name="roll" id="roll">
					<option value="Leader" selected="selected">팀장</option>
					<option value="front">프론트개발</option>
					<option value="back">백단개발</option>
					<option value="android">안드로이드개발</option>
					<option value="minfe">민폐</option>
		</select><br />
		</td>
	</tr>
	<tr>
		<td>성별</td>
		<td id ="gender">${user.gender}</td>
		<td>팀명</td>
		<td>	
		<input type="radio" id="teamid_1" name = "teamid"
				value="none" checked="checked" />없음
		<input type="radio" id="teamid_2" name = "teamid"
					value="ATEAM"  />걍놀자
		<input type="radio" id="teamid_3" name = "teamid"
					value="HTEAM"  />지은이네
		<input type="radio" id="teamid_4" name = "teamid"
					value="STEAM"  />왕거북이
		<input type="radio" id="teamid_5" name = "teamid"
					value="CTEAM"  />코딩짱<br />
		
		</td>
	</tr>
</table>
<br />
<input id="update_submit" type="button" value="UPDATE">
</form>
</div>
<%-- <form method="POST" enctype="multipart/form-data" 
		action="${context}/member.do?action=fileupload&page=retrieve">
  파일업로드: <input type="file" name="upfile"><br/>
  <br/>
  <input type="submit" value="파일업로드">
</form> --%>
<script>
var teamid = document.getElementsByName('teamid');
for(var i in teamid){
	if(teamid[i].value === '${user.teamId}'.toLowerCase()){
		document.getElementById(teamid[i].value).checked = true;
	}
}
var roll = document.getElementById('roll');
for(var i=0;i<roll.options.length;i++){
	if(roll.options[i].value === '${user.roll}'){
		roll.options[i].setAttribute("selected","selected");
	}
}

$('#update_submit').click(function(){
	alert('업데이트클릭!');
	$('#updateForm')
	.attr({
		action : '${context}/member/modify',
		method : "post"
	})
	.submit();
});


</script>



