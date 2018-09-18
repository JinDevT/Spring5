"use strict"//에러를 바로 내겠다. //엄격한 문법을 적용하시오. 틀리면 에러처리하라는 명령어
var app= app || { };
var user = user || {};

//만약에 app 있다면 있는걸로 대체하고 없으면 새로운거로 만들어라.	
/*app =(x=>{
	var init =x=>{
		console.log('step 1'); //콘솔에 뜨게하는 것
		//app.session.context(x); //session으로 되어있지만 이 세션은 각 사용자의 모니터?
		app.router.init(x); // 이거내가 대신 넣어줬다 . 
		app.onCreate();
	};
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
		
	};
	setContentView : ()=>{
		console.log('step 4 ::'+app.j()); //컨텍스트패스가 세션에 저장딤.
	}
})(); */
app =(()=>{
	var init =x=>{
		console.log('step 1'); //콘솔에 뜨게하는 것
		app.router.init(x); 
	};
	return {
		init : init
	};
})();
app.main =(()=>{
	var w,header,footer,content,nav,ctx,script,style,img;
	var init =()=>{
		ctx = $.ctx();
		script = $.script();
		style = $.style();
		img = $.img();
		w= $('#wrapper');
		header = script+'/header.js';
		content = script+'/content.js';
		nav = script+'/nav.js';
		footer = script+'/footer.js';
		onCreate();
	};
	var onCreate =()=>{    //우리가배운 에이작스 코딩은 여기다 코딩한다.
		setContentView(); 
		
	};
	var setContentView =()=>{    //이벤트를 주지않아도 보여지는 화면.
	    /* $.getScript(header,()=>{
	    	 w.html(headerUI(ctx));
	     });*/
	        //// 자스 Promise 비동기 로직 다루기
	       $.when(
	            $.getScript(header),
	            $.getScript(content),
	            $.getScript(nav),
	            $.getScript(footer),
	            $.Deferred(y=>{
	            	 $(y.resolve);
	            })
	        ).done(z=>{
	        	 w.html(
	        			 headerUI()
	        			 +navUI()
	        			 +contentUI()
	        			 +footerUI() 
	        	 		);
	        	$('#login_btn').click(e=>{
	        		e.preventDefault(); //디폴트값을 막아준다. href="#"이 있어도 상관없다. e 안에서만이다.
	        		app.permission.login();
	        	});
	        	$('#board_list').click(e=>{
	        		app.board.init();
	        	});
	        	$('#join_btn').click(e=>{
	        		e.preventDefault();
	        		app.permission.join();
	        	})
	        })
	        .fail(x=>{
	        	console.log('로드 실패');
	        });
	};
	return {
		init : init
	};
})();
app.board = (()=>{
	var w,header,footer,content,nav,ctx,script,style,img;
	var init =()=>{
		onCreate();
	};
	var onCreate =()=>{
		
	};
	var setContentView =()=>{
		alert('Board');
	};
	
	return {init : init};
})();
app.permission =(()=>{
	var login =()=>{
		alert('login');
		$('#content').empty();
		$.getScript($.script()+'/login.js',()=>{
			$('#content').html(loginUI())
		});
	};
	var join =()=>{
		alert('join');
		$('#content').empty();
		$.getScript($.script()+'/add.js',()=>{
			$('#content').html(addUI())
		});
	};
	return {
		login : login,
		join : join
		
	};
})();

app.router ={
		init : x =>{
			$.getScript(x+'/resources/js/router.js',
					()=>{
						$.extend(new Session(x));
						$.getScript($.script()+'/util.js')
						.done(x=>{console.log('실행');})
						.fail(x=>{console.log('실패')});
						app.main.init();
						
					}
			);
		}
	};
	




