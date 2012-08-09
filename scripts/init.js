function init()
{
	//Load slide show
	$('#slides').slides({
		play: 3000,
		bigTarget: true,
		generatePagination: false,
		// animationStart: function(current){
			// $('.caption').animate({
				// bottom: 0
			// },100);
		// },
		// animationComplete: function(current){
			// $('.caption').animate({
				// bottom: -20
			// },200);
		// },
		// slidesLoaded: function() {
			// $('.caption').animate({
				// bottom: 20
			// },200);
		// }
	});
}
