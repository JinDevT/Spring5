"use strict"//에러를 바로 내겠다. //엄격한 문법을 적용하시오. 틀리면 에러처리하라는 명령어
var app= app || { };
var user = user || {};

//만약에 app 있다면 있는걸로 대체하고 없으면 새로운거로 만들어라.	
app = {
		init : x=>{
			console.log('step 1'); //콘솔에 뜨게하는 것
			app.session.context(x); //session으로 되어있지만 이 세션은 각 사용자의 모니터?
			app.onCreate();
		},
		onCreate : ()=>{
			console.log('step 3'); 
			app.setContentView();
			$('#login_btn').click(()=>{ 
				location.href = app.x()+'/move/public/member/login';
				alert('login_btn : '+app.x()+'/move/public/member/login');
			});
			$('#join_btn').click(()=>{ 
			
				location.href = app.x()+'/move/public/member/add';
			});
			$('#login_submit').click(()=>{ 
				alert('떠라제발..');
				$('#loginForm')
				.attr({
					action: app.x()+"/member/login",
					method: "post"
				})
				.submit(); 
			
			});
			$('#logout_btn').click(()=>{ 
				location.href = app.x()+"/member/logout" 
			});
			$('#joinFormBtn').click(()=>{
				alert('joinFormBtn click !!');
				$('#joinForm').attr({
					action: app.x()+"/member/add",
					method: "post"
				})
				.submit(); 
				
			});
			$('#retrieveBtn').click(()=>{
				location.href = app.x()+'/move/ret/member/retrieve';
			});
			$('#move_updateBtn').click(()=>{
				location.href = app.x()+'/move/auth/member/modify'
			});
			$('#updateBtn').click(()=>{
				$('#updateForm').attr({
					action: app.x()+"/member/modify/"+user.get('userid'),
					method : "post"
				})
				.submit();
			});
			$('#move_deleteBtn').click(()=>{
				alert('delete이도오옹오옹'+user.get('userid'));
				location.href = app.x()+'/move/auth/member/remove';
			});
			$('#deleteBtn').click(()=>{
				alert('delete이도오옹오옹'+user.get('userid'));
				$('#deleteForm').attr({
					action: app.x()+"/member/remove/"+user.get('userid'),
					method: "post"
				})
				.submit();
			});
			$('#name').text(user.get('name'));
			$('#userid').text(user.get('userid'));
			$('#gender').text(user.get('gender'));
			$('#age').text(user.get('age'));
			
		},
		setContentView : ()=>{
			console.log('step 4 ::'+app.j()); //컨텍스트패스가 세션에 저장딤.
		}
}; //객체리터럴방식
	




