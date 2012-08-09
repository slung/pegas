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
};

function selectMenuItem( item )
{
	switch (item)
	{
		case 'home':
		{
			$(".menu").css("background-position", "0 -640px");
			break;
		}
		case 'models':
		{
			$(".menu").css("background-position", "0 -1279px");
			break;
		}
		case 'gallery':
		{
			$(".menu").css("background-position", "0 -1918px");
			break;
		}
		case 'buy':
		{
			$(".menu").css("background-position", "0 -2557px");
			break;
		}
	}
}
