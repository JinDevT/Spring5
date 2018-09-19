"use strict"//에러를 바로 내겠다. //엄격한 문법을 적용하시오. 틀리면 에러처리하라는 명령어
var app= app || { };
var user = user || {};

//만약에 app 있다면 있는걸로 대체하고 없으면 새로운거로 만들어라.	
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
		app.router.home();
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
			$('#content').html(loginUI());
			$('#login_submit').click(e=>{
				$.ajax({
					url: $.ctx()+'/member/login',
					method : 'post',
					contentType : 'application/json',
					data : JSON.stringify({userid: $('#userid').val(),
										password: $('#password').val()}
					),
					success : d=>{
						alert('ID 판단'+d.ID);   //d가 rmap 이다.
						alert('PW 판단'+d.PW);
						alert('MBR 판단'+d.MBR.userid);   
						if(d.ID ==="WRONG"){ 
							
						}else if(d.PW==="WRONG"){
							
						}else{
							$('#content').html(contentUI());
							$('#loginDivBtn').empty();
							$('<li/>').attr('id','login_btn').addClass("nav-item mx-0 mx-lg-1").appendTo($('#loginDivBtn'));
							$('<a/>').attr('href','#').addClass("nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger").html('logout').appendTo($('#loginDivBtn'))
							.click(e=>{
								app.router.home();
							})
							$('#joinDivBtn').empty();
							$('<li/>').attr('id','join_btn').addClass("nav-item mx-0 mx-lg-1").appendTo($('#joinDivBtn'));
							$('<a/>').attr('href','#').addClass("nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger").html('mypage').appendTo($('#joinDivBtn'));
							
							
						}
					},
					error : (m1,m2,m3)=>{
						alert('에러발생1'+m1);
						alert('에러발생2'+m2);
						alert('에러발생3'+m3);
					}
				});
			})
			
			
		});
	};
	var join =()=>{
		alert('join');
		$('#content').empty();
		$.getScript($.script()+'/add.js',()=>{
			$('#content').html(addUI())
			$('#joinFormBtn').click(e=>{
				$.ajax({
					url : $.ctx()+'/member/add',
					method : 'post',
					contentType : 'application/json',
					data : JSON.stringify({name : $('#name').val(),
						userid : $('#userid').val(),
						password : $('#password').val(),
						ssn : $('#ssn').val(),
						teamid : $('#teamid').val(),
						roll : $('#roll').val()}),
					success :d=>{
						
					},
					error : (m1,m2,m3)=>{
						alert('에러발생1'+m1);
						alert('에러발생2'+m2);
						alert('에러발생3'+m3);
					}
				
				});
				
			});
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
	},
	home : ()=>{
		   $.when(
		            $.getScript($.script()+'/header.js'),
		            $.getScript($.script()+'/content.js'),
		            $.getScript($.script()+'/nav.js'),
		            $.getScript($.script()+'/footer.js'),
		            $.Deferred(y=>{
		            	 $(y.resolve);
		            })
		        ).done(z=>{
		        	$('#wrapper').html(
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
	}
};
	




