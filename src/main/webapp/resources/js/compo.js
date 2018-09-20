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
	}
	
	/*<div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="basic-addon1">@</span>
	  </div>
	  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
	</div>*/
	
}//콜백안에서만 전역임. 콜백은 에이싱크공간. 갔다 슬 때 콜백내부에서 처리하면 에이싱크.
