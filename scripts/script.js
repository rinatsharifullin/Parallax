$(window).scroll(function(){
	var scrollPosition = $(this).scrollTop();
	console.log(scrollPosition);
	$('#logo').css({
		'transform' : 'translate(-50%, ' + scrollPosition/2 + 'px)'
	});
});