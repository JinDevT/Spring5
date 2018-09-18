"use strict";
var algo = algo || {};
algo ={
		init : x=>{
			algo.onCreate(x);
			algo.setContentView();
		},
		onCreate :x=>{
			algo.router.onCreate(x);
		},
		setContentView : ()=>{
			$('#wrapper').empty();
		}
};
algo.main = (()=>{
	var $wrapper,ctx,img,script,style,compo,json,$t_1,$t_r;
	var onCreate = () =>{
		ctx = $.ctx();
		img = $.img();
		script = $.script();
		style = $.style();
		compo = script + '/compo.js';
		setContentView();
	};
	var setContentView = ()=>{
		$('#wrapper').html('<h1>알고리즘</h1><span id="seq">수 열</span>'
				+'<span id ="appl">응 용</span><div id="ctn" >'
				+'<table id="tb1" style="width:800px;height:300px;'
				+'border-collapse: collapse;border : 1px solid black;margin:0 auto">'
				+'<tr style="border: 1px solid black;">'
				+'<td id="t_1" style="width: 50%; border: 1px solid black;"></td>'
				+'<td id="t_r" style="width: 50%; border: 1px solid black;"></td>'
				+'</tr>'
				+'</table>'
				+'</div>');
		let $t_1 = $('#t_1');
		let $t_r = $('#t_r');
		$("<ul />").attr({id : 'side_menu'}).addClass('list-group').appendTo($t_1);
		$('<li/>').attr({id: 'arith'}).addClass('list-group-item').appendTo($('#side_menu'));
		$("<a/>").attr({href:"#"}).html('등차수열의 합').appendTo($('#arith'))
		/*let anchor = $('<a/>').attr({href : '#'}).html('등차수열의합'); //컴포넌트객체*/
		//let anchor = $.fn.anchor({text:'등차수열'});
		// <a href = '#'>등차수열의합</a> -> 정적
		//anchor.appendTo($('#arith'))
		.click(e=>{
			$('<div/>').attr({id:'ques'}).appendTo($t_r);
			$('<h3/>').html('시작값 x, 마지막값 y, 공차 d 인 등차수열의 합을 구하시오.').appendTo($('#ques'));
			let obj =[{id:'star', label:'시작값'},
					   {id:'end', label:'마지막값'},
					   {id:'diff', label:'공차'}];
			$.each(obj, function(i,j){
				$('<label/>').html(j.label).appendTo($('#ques'));
				$('<input/>').attr({id:j.id, type:'text'}).appendTo($('#ques'));
				$('<br/>').appendTo($('#ques'));
			});
			
			$('<button/>').attr({type:'button'}).addClass('btn btn-primary').text('결과보기').appendTo('#ques')
			.click(e=>{
				$('#h6').remove();
				let res = "숫자를 입력하세요";
				if(!$.fn.zeroChecker([$('#sta').val(),$('#end').val(), $('#diff').val()])){
					let sta = $('#star').val()*1;
					let end = $('#end').val()*1;
					let diff = $('#diff').val()*1;
					console.log(sta+','+end+','+diff);
					let i = sta;
					let sum = 0;
					while(i<=end){
						sum=sum+i;
						i=i+diff;
					}
					res = "답 : " + sum;
				}
				$('<h6/>').attr({id:"h6"}).appendTo('#ques').text(res);				
			});
		});
		$('#appl').click(x=>{
			alert('apple click');
			$t_1.empty();
			$.getScript(compo, ()=>{
				ui.ul({len: 3, id: 'menu'}).appendTo($t_1);
				ui.anchor({txt:'화폐문제'}).appendTo($('#menu-0'))
				.click(x=>{
					$t_r.empty();
					alert('화폐문제!!');
					$('<h6>화폐문제</h6>').appendTo($t_r);
					ui.input({
						id : 'money',
						txt : '입금액'
						
					})
					.appendTo($t_r);
					ui.btn({clazz:'primary', txt:'전 송'})
					.appendTo($t_r)
					.click(e=>{
						
						alert('화폐구매 :::'+$('#money').val());
						$.ajax({
							url : ctx +'/algo/money/',
							method : 'post',
							contentType : 'application/json',
							data : JSON.stringify({money : $('#money').val()}), //보안을 위해 data를 넣는다. 제이슨 방식으로.
							success : d=>{
								alert('AJAX 성공이다!!'+d.test);
							},
							error : (m1,m2,m3)=>{
								alert('에러발생1'+m1);
								alert('에러발생2'+m2);
								alert('에러발생3'+m3);
							}
						});
					});
					
					
				});
			});
		});
		$('#seq').click(x=>{
			algo.main.setContentView()
		});
		
	}; //setContentView
	return {
		onCreate:onCreate,
		setContentView:setContentView
	};
})();
algo.series = {
		arith : x =>{},
		fibonacci : x =>{}, //피보나치
		swit : x => {}, //스위치
		factorial : x => {} //팩토리
};
algo.array = {
		bubble : x=> {},
		insert : x=> {},
		select : x=> {},
		ranking : x=> {}
};
algo.matrix = {
		fiveBy5 : x=> {},
		sandGlass : x=>{},
		snail : x => {},
		diamond : x=> {},
		zigzag : x=> {}
};
algo.math = {
		
};
algo.appl = {};

algo.router ={
	onCreate : x =>{
		$.getScript(x+'/resources/js/router.js',
				()=>{
					$.extend(new Session(x));
					$.getScript($.ctx()+'/resources/js/util.js')
					.done(x=>{console.log('실행');})
					.fail(x=>{console.log('실패')});
					algo.main.onCreate();
					
				}
		);
	}
};
