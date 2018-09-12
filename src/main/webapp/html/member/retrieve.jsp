<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id = "contentBox" style = "margin:auto; text-align:center;" >
<table style ="width:40%; height:250px; margin:auto; text-align:center; ">
	<tr>
		<td rowspan="3" colspan="2" width=40%>
		<img src="${img}/upload/${imgPath}" style ="height: 160px; width: 100%" alt="" /></td>
		<td>이름</td>
		<td>${user.name}</td>
	</tr>
	<tr>
		<td>아이디</td>
		<td>${user.userid}</td>
	</tr>
	<tr>
		<td>비밀번호</td>
		<td>*********</td>
	</tr>
	<tr>
		<td>나이</td>
		<td>${user.age}</td>
		<td>역할</td>
		<td>${user.roll}</td>
	</tr>
	<tr>
		<td>성별</td>
		<td>${user.gender}</td>
		<td>팀명</td>
		<td>${user.teamid}</td>
	</tr>
</table>
<br />
	
	<a id="move_updateBtn" >UPDATE FORM 이동</a> 
	<a id="move_deleteBtn" >DELETE FORM 이동</a><br />
</div>
<script>
	$('#move_updateBtn').click(function(){
		alert('업데이트이동!');
		location.href = '${context}/move/auth/member/modify'
	});
	$('#move_deleteBtn').click(function(){
		alert('탈퇴이동!');
		location.href = '${context}/move/auth/member/remove'
	});
	
</script>



<!-- String userid = user.getUserid(); 내부적으로는 이렇게 되어있다. -->

	

