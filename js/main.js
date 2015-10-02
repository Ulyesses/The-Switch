//$(document).ready(function(){});

	//var switchStatus = true;

	//$(document).on('click', 'button', function)

//if ('.light').on('click', function(e){
	//$('.switch').toggleClass('on');

//});






$('.switch').on('click', function(e){
	$('body').toggleClass('dark').toggleClass('light');
	$('button').toggleClass('off').toggleClass('on');
	$('.status').text('Hey, who turn off the lights?');
});