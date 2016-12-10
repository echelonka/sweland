$(function(){
	$('.places').hover(
		function(){
			$(this).find('p').css('opacity', '1');
			$(this).find('h1').css('bottom', '100%');
			$(this).find('a').css({
				opacity: '1',
				bottom: '0'
			});
		},
		function(){
			$(this).find('p').css('opacity', '0');
			$(this).find('h1').css('bottom', '30px');
			$(this).find('a').css({
				opacity: '0',
				bottom: '-30px'
			});
		}
	);
});