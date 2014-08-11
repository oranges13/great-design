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
	$('#quals div').each(function(i) {
		$(this).delay(200*i).animate({
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
		$(this).delay(200*i).animate({
			opacity: 1
		}, 700);
	})
}, {offset: '50%'});

// Paralaxx Effect

$window = $(window);
 
$('section[data-type="background"]').each(function(){
 var $scroll = $(this);
                 
  $(window).scroll(function() {                     
    var yPos = -($window.scrollTop() / $scroll.data('speed')); 
    
    var coords = '0 '+ yPos + 'px';
    $scroll.css({ backgroundPosition: coords });    
  });
});