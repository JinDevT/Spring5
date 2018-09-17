"use strict";
var ui ={
	div : x=>{
		return $('<div/>').attr(x);
	},
	anchor : x=>{
		return $('<a/>').attr({href : '#'}).html(x.txt);
	},
	ul :x=>{ // ui.ul([{txt:}])
		let ul = $('<ul>');
		for(var i=0;i<x.len;i++){
			$('<li/>').attr({
				id : x.id+'-'+i
			}).appendTo(ul);
		}
		return ul;
	},
	label : x=>{
		return  $('<label/>')
					.attr('for',x.id).text(x.txt)
	
	},
	input : x=>{
		let p = ui.div({}).addClass("input-group mb-3");
		//$('#test').html(' <span class="input-group-text" id="basic-addon1">@</span>'); //이렇게 하면 안된다.
		(ui.div({id:'input-group-prepend'})
				.addClass("input-group-prepend"))
				.html('<span class="input-group-text" id="basic-addon1">'
						/*+ x.div__val*/
						+'비용</span>').appendTo(p);
		$("<input/>").attr({
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return p;
	}
	
	/*<div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="basic-addon1">@</span>
	  </div>
	  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
	</div>*/
	
}//콜백안에서만 전역임. 콜백은 에이싱크공간. 갔다 슬 때 콜백내부에서 처리하면 에이싱크.
