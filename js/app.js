$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1300);
});

// Scrollspy act-alike

$('section').waypoint(function() {
	$('li.active').removeClass('active');
	$('a[href=#'+$(this).attr("id")+']').parents('li').addClass('active');
},{offset: '200px'});

$('#quals').waypoint(function() {
	// Reset opacity
	$('#rocket, #term, #degree').css("opacity",0);
}, {offset: '90%'});

$('#quals').waypoint(function() {
	$('#rocket').animate({
		opacity: 1
	}, 700);
	setTimeout(function() {
		$("#term").animate({
			opacity: 1
		}, 700)
	}, 300);
	setTimeout(function() {
		$("#degree").animate({
			opacity: 1
		}, 700)
	}, 600);
}, {offset: '50%'});