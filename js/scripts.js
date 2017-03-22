$(function(){
	var button = $('button');
		button.each(function( index, element ) {
    		if(index % 2 == 0) {
    			$("button:even").css('background', 'blue');
    			$("button:even").css('color', 'white');
    		};
  		});
	var paragraphs = $('span');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    	$(element).append(button) 
	});
	$("button").click(function(){
		alert($(this).attr("data-tmp"));
	});
});

