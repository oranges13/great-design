$('document').ready(function() {
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'dark_rounded',
		social_tools: '',
	});
});

$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1300);
});

// Waypoints

$('#hero').waypoint(function() {
	// Reset when coming to the top
	$('li.active').removeClass('active');
});

$('section').waypoint(function(dir) {
	if(dir == 'down') {
		$('li.active').removeClass('active');
		$('a[href=#'+$(this).attr("id")+']').parents('li').addClass('active');
	}
}, {offset: '20%'});

$('section').waypoint(function(dir) {
	if(dir == 'up') {
		$('li.active').removeClass('active');
		$('a[href=#'+$(this).attr("id")+']').parents('li').addClass('active');
	}
}, {offset: '-20%'});


$('#quals').waypoint(function() {
	// Reset opacity
	$('#rocket, #term, #degree').css("opacity",0);
}, {offset: '80%'});

$('#quals').waypoint(function() {
	$('#quals div').each(function(i) {
		$(this).delay(100*i).animate({
			opacity: 1
		}, 700);
	})
}, {offset: '50%'});


$('#program').waypoint(function() {
	// Reset Opacity
	$('#program i').css("opacity", 0);
}, {offset: '90%'});

$('#program').waypoint(function() {
	$('#program i').each(function(i) {
		$(this).delay(100*i).animate({
			opacity: 1
		}, 700);
	})
}, {offset: '50%'});


$('#reviews').waypoint(function() {
	//Reset Opacity
	$('#reviews p').css("opacity",0).css("top", "40px");
}, {offset: '90%'});

$('#reviews').waypoint(function() {
	$('#reviews p').each(function(i) {
		$(this).delay(100*i).animate({
			opacity: 1,
			top: 0
		}, 700);
	})
}, {offset: "50%"});

// Effects

$('#program i').mouseenter(function() {
	$(this).animate({
		"font-size": "12em",
		"color": "#269"
	}, 150)
});

$('#program i').mouseleave(function() {
	$(this).animate({
		"font-size": "10em",
		"color": "#666"
	}, 150)
});

// Paralax Effect

$window = $(window);
 
$('section[data-type="background"]').each(function(){
 var $scroll = $(this);
                 
  $(window).scroll(function() {                     
    var yPos = -($window.scrollTop() / $scroll.data('speed')); 
    
    var coords = '0 '+ yPos + 'px';
    $scroll.css({ backgroundPosition: coords });    
  });
});

// Contact

$('#contact form').submit(function(e) {
		e.preventDefault;
		$.post('mailer.php', $('#contact form').serialize(), function(data) {
				console.log(data);
		});
		return false;
});