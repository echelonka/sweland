$(function(){
	$('.places').hover(
		function(){
			$(this).find('p').animate({opacity: 1}, 100);
			$(this).find('h1').animate({bottom: '100%'}, 150);
			$(this).find('a').animate({opacity: 1, bottom: 0}, 150);
		},
		function(){
			$(this).find('p').animate({opacity: 0}, 100);
			$(this).find('h1').animate({bottom: '30px'}, 150);
			$(this).find('a').animate({opacity: 0, bottom: '-30px'}, 150);
		}
	);
});