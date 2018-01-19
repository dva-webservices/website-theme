jQuery(document).ready(function($){
	// open the panel
	$('.panel-btn').on('click', function(event){
		event.preventDefault();
		$('.panel').addClass('is-visible');
		$("#email").focus();
	});
	// close the panel
	$('.panel').on('click', function(event){
		if( $(event.target).is('.panel') || $(event.target).is('.panel-close') ) { 
			$('.panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	// open help panel on unauth screen
	$('.panel-help').on('click', function(event){
		event.preventDefault();
		$('.panel-home-help').addClass('is-visible');
	});
	// close the help panel
	$('.panel-home-help').on('click', function(event){
		if( $(event.target).is('.panel-home-help') || $(event.target).is('.panel-close') ) { 
			$('.panel-home-help').removeClass('is-visible');
			event.preventDefault();
		}
	});


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
                window.setTimeout(() => {
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
      });
});
