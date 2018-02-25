jQuery(document).ready(function($){
	// open the panel
	/*$('.panel-btn').click(function(event){
  //add UIkit page alert classes to Drupal system messages
  $('.messages').addClass('uikit-page-alerts');
  $('.messages--warning').addClass('uikit-page-alerts--warning');
  $('.messages--error').addClass('uikit-page-alerts--error');
  $('.messages--status').addClass('uikit-page-alerts--info');
  $('<div class="section-divider full-width"><div class="arrow-down"></div></div>').insertAfter('.document-links-section');
  $('.form-submit').addClass('uikit-btn');
  
  //news
  $('#block-views-latest-news-block-1').addClass('container-with-gradient');

  $('.home-news-listing .view-content').addClass('col-md-6');
  $('.news-listing .views-row-first').wrap('<div class="first-news-item full-width"><div class="container"></div></div>');
  $('.section-news-media .views-row-first').wrap('<div class="first-news-item full-width"><div class="container"></div></div>');
  $('.news-categories ul').prepend('<li><a href="/news-media/news">All news</a></li>');
  //show hide death related field when relevant
  /*$('#edit-field-cause-of-death-value-wrapper').hide();
  $(function() {
      $("#edit-field-circumstances-value").change(function() {
          if(this.value === "spouse_partner_deceased" || this.value === "child_member_deceased" ) {
  
          $('#edit-field-cause-of-death-value-wrapper').show();
          }
          else{
               $('#edit-field-cause-of-death-value-wrapper').hide();
          }
      });
  });*/


  // open the panel
	$('.panel-btn').click(function(event){
		event.preventDefault();
		$('.panel').addClass('is-visible');
		$("#email").focus();
	});
	// close the panel
	$('.panel').click(function(event){
		if( $(event.target).is('.panel') || $(event.target).is('.panel-close') ) { 
			$('.panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	// open help panel on unauth screen
	$('.panel-help').click(function(event){
		event.preventDefault();
		$('.panel-home-help').addClass('is-visible');
	});
	// close the help panel
	$('.panel-home-help').click(function(event){
		if( $(event.target).is('.panel-home-help') || $(event.target).is('.panel-close') ) { 
			$('.panel-home-help').removeClass('is-visible');
			event.preventDefault();
		}
  });
  
  


    // Help slide gesture
      var panels = $('.panel');
      panels.map((index, panel)) => {
        var panelContainer = $(panel).find('.panel-container');
        var panelHeader = $(panel).find('.panel-header');
	var originX = 0;
        var lastX = 0;
	var dragging = false;
        var uiBunch = panelContainer.add(panelHeader);
        uiBunch.on('mousedown touchstart', (event) => {
          if (!dragging && !$(event.target).is('.panel-close')) {
            dragging = true;
            originX = event.screenX || event.targetTouches[0].screenX;
            lastX = originX;
	});

// open the panel
$('.panel-btn').click(function(event){
  event.preventDefault();
  $('.panel').addClass('is-visible');
  $("#email").focus();
});
// close the panel
$('.panel').click(function(event){
  if( $(event.target).is('.panel') || $(event.target).is('.panel-close') ) { 
    $('.panel').removeClass('is-visible');
    event.preventDefault();
  }
});
// open help panel on unauth screen
$('.panel-help').click(function(event){
  event.preventDefault();
  $('.panel-home-help').addClass('is-visible');
});
// close the help panel
$('.panel-home-help').click(function(event){
  if( $(event.target).is('.panel-home-help') || $(event.target).is('.panel-close') ) { 
    $('.panel-home-help').removeClass('is-visible');
    event.preventDefault();
  }
});

/*
  // Help slide gesture
    var panels = $('.panel');
    panels.map((index, panel) => {
      var panelContainer = $(panel).find('.panel-container');
      var panelHeader = $(panel).find('.panel-header');
var originX = 0;
      var lastX = 0;
var dragging = false;
      var uiBunch = panelContainer.add(panelHeader);
      uiBunch.on('mousedown touchstart', (event) => {
        if (!dragging && !$(event.target).is('.panel-close')) {
          dragging = true;
          originX = event.screenX || event.targetTouches[0].screenX;
          lastX = originX;
        }
});
      uiBunch.on('mousemove touchmove', (event) => {
        if (dragging) {
          lastX = (event.screenX || event.targetTouches[0].screenX);
          var newX = lastX - originX;
          if (newX >= 0)
            uiBunch.css({right: -newX + 'px'});
        }
});
      uiBunch.on('mouseup touchend', (event) => {
        if (dragging && !$(event.target).is('.panel-close')) {
          dragging = false;
          var newX = (event.screenX || lastX) - originX;
          if (newX > (panelContainer[0].offsetWidth * 0.25)) {
              $(panel).removeClass('is-visible').addClass('swipe-closing');
              window.setTimeout(function() {
                $(panel).removeClass('swipe-closing');
                uiBunch.css({right: ''});
              }, 400);
          }
          else {
            uiBunch.css({right: '0px', transition: 'right 0.3s'});
            window.setTimeout(() => {uiBunch.css({transition: ''});}, 300);
          }
        }
});
    });*/

});

