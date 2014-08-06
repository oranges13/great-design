$('a[href*=#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1300);
});

$(document).ready(function() {
	$('#header div.pane').addClass('fadeIn');
	$('#design h2, #design .pane div').addClass('faded');
	$('#quals h2, #quals .pane div').addClass('faded');
});

$('#design').waypoint(function() {
	$('#design h2').addClass('fadeIn');
  	$('#design .pane div').addClass('fadeIn');
}, { offset: '55%' });

$('#quals').waypoint(function() {
  $('#quals h2').addClass('fadeIn');
  $('#quals .pane div').addClass('fadeIn');
}, { offset: '55%' });