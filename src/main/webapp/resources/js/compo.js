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
	},
	page : x=>{
		return $('<ul/>').addClass('pagination').appendTo($('<nav/>').attr('aria-label','...'));
	/*
	 * <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

	 * 진태 하드코딩..
	 * ul.appendTo(nav);
	$('<li/>').addClass('page-item disabled').appendTo(ul);
	$('<span/>').addClass("page-link").html('Previous').appendTo(ul);
	$('<li/>').addClass('page-item').appendTo(ul);
	$('<a/>').addClass('page-link').attr({href:'#'}).html('1').appendTo(ul);
	$('<li/>').addClass('page-item active').appendTo(ul);
	$('<a/>').addClass('page-link').attr({id:'a_1' , href:'#'}).html('2').appendTo(ul);
	$('<span/>').addClass('sr-only').html('((current))').appendTo($('#a_1'));
	$('<li/>').addClass('page-item').appendTo(ul);
	$('<a/>').addClass('page-link').attr({href:'#'}).html('3').appendTo(ul);
	$('<li/>').addClass('page-item').appendTo(ul);
	$('<a/>').addClass('page-link').attr({href:'#'}).html('4').appendTo(ul);
	$('<li/>').addClass('page-item').appendTo(ul);
	$('<a/>').addClass('page-link').attr({href:'#'}).html('NEXT').appendTo(ul);*/
	

		
	}
	

}//콜백안에서만 전역임. 콜백은 에이싱크공간. 갔다 슬 때 콜백내부에서 처리하면 에이싱크.
