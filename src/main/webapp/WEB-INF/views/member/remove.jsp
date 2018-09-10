<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div id="contentBox">
		<form id="deleteForm">
			PASSWORD 재입력 
			<input type="password" name="password" id="password" />
			<input id="delete_submit" type="button" value="DELETE">
		</form>
</div> 
<script>
	$('#delete_submit').click(function(){
		alert('탈퇴클릭!');
		$('#deleteForm')
		.attr({
			action : '${context}/member/remove',
			method : "post"
		})
		.submit();
	});

</script>

