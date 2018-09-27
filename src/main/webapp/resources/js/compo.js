"use strict";
var ui ={
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{ //ui.anchor({id:'',txt:'TEST'});
		return $('<a/>').attr({href : '#',id:x.id}).html(x.txt);
	},
	ul :x=>{ // ui.ul([{id:'',len:''}])
		let y = $('<ul>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({
				id : x.id+'-'+i
			}).appendTo(y);
		}
		return y;
	},
	label : x=>{
		return  $('<label/>')
					.attr('for',x.id).text(x.txt)
	
	},
	input : x=>{
		let y = ui.div({}).addClass("input-group mb-3");
		//$('#test').html(' <span class="input-group-text" id="basic-addon1">@</span>'); //이렇게 하면 안된다.
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						+ x.txt
						+'</span>').appendTo(y);
		$("<input/>").attr({
			id : x.id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(y);
		return y;
	},
	btn : x=>{
		//<button type="button" class="btn btn-primary">Primary</button>
			return $('<button/>').attr('type','button').addClass('btn btn-'+x.clazz).html(x.txt);
	},
	tbl : x=>{
		let d = $('<div/>').addClass('panel panel-'+x.type);
		let ph = $('<div/>').addClass('panel-heading').html(x.head);
		let pd = $('<div/>').addClass('panel-body').html(x.body);
		let t = $('<table/>').addClass(x.id);
		let thead = $('<thead/>')
		let tr = $('<tr/>');
		ph.appendTo(d);
		pd.appendTo(d);
		t.addClass(x.clazz).appendTo(d);
		
		$.each(x.list,(i,j)=>{
			$('<th/>').html(j).appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').attr({id:'tbody'}).appendTo(t);
	
		return d;
		/*t.attr({id:'brd-tb'}).addClass('table').appendTo(x);
		$('<thead/>').appendTo($('#brd-tb'));
		$('<tr/>').attr({id:'brd-meta'}).appendTo($('#brd-tb'));
		$('<th/>').attr({scope : 'col'}).html('No').appendTo($('#brd-meta'));
		$('<th/>').attr({scope : 'col'}).html('제목').appendTo($('#brd-meta'));
		$('<th/>').attr({scope : 'col'}).html('내용').appendTo($('#brd-meta'));
		$('<th/>').attr({scope : 'col'}).html('작성자').appendTo($('#brd-meta'));
		$('<th/>').attr({scope : 'col'}).html('조회수').appendTo($('#brd-meta'));
		
		$('<tbody/>').attr({id : 'tbodys'}).appendTo($('#brd-tb'));
		$('<tr/>').attr({id : 'brd-row1'}).appendTo($('#tbodys'));
		$('<th/>').html('1').appendTo($('#brd-row1'));
		$('<td/>').html('제목1').appendTo($('#brd-row1'));
		$('<td/>').html('제목1').appendTo($('#brd-row1'));
		$('<td/>').html('제목1').appendTo($('#brd-row1'));
		$('<td/>').html('제목1').appendTo($('#brd-row1'));
		
		$('<tr/>').attr({id : 'brd-row2'}).appendTo($('#brd-tb'));
		$('<th/>').html('2').appendTo($('#brd-row2'));
		$('<td/>').html('제목2').appendTo($('#brd-row2'));
		$('<td/>').html('제목2').appendTo($('#brd-row2'));
		$('<td/>').html('제목2').appendTo($('#brd-row2'));
		$('<td/>').html('제목2').appendTo($('#brd-row2'));*/
		
		//바보니까 이거 여기다 적어놔도 못볼꺼같구나 정신차려 이친구야 
		
	}
	
	/*<div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="basic-addon1">@</span>
	  </div>
	  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
	</div>*/
	
}//콜백안에서만 전역임. 콜백은 에이싱크공간. 갔다 슬 때 콜백내부에서 처리하면 에이싱크.
