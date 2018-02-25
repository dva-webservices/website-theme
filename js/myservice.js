jQuery(document).ready(function($){
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

    // Swap text on top panel accordion button
	var open = false;
	$( ".uikit-accordion__title" ).click(function() {
		open = !open;
		if (open){
			$( ".accordion-toppanel-btn" ).text("Close");
		}
		else {
			$( ".accordion-toppanel-btn" ).text("24hr counselling and support services");
		}

		$(".uikit-accordion").toggleClass("accordion-open");
		$(".uikit-accordion").toggleClass("accordion-closed");
    $(".uikit-accordion__body").toggleClass("is-visible");
	});

	$( ".myservice-login" ).on( "submit", function( event ) {
		event.preventDefault();		
		var str = JSON.stringify($( this).serialize());
    console.log(str );
	});

	var arr = {email: "le.tong@dva.gov.au", password: "fdsaf"}
$.ajax({
    url: 'https://www.dva.gov.au/myservice/user.login',
    type: 'POST',
    data: JSON.stringify(arr),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: false,
    success: function(msg) {
        alert(msg);
    }
});

   /* // Mobile navigation menu
	var toggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	var menuItems = document.querySelectorAll('.menu li a');

	if (toggle != null) {
		toggle.addEventListener('click', function(){
		  if (menu.classList.contains('is-active')) {
		  	toggle.classList.remove('menu-closed');
		    this.setAttribute('aria-expanded', 'false');
		    menu.classList.remove('is-active');
		  } else {
			  toggle.classList.add('menu-closed');
		    menu.classList.add('is-active');
		    this.setAttribute('aria-expanded', 'true');
		    //menuItems[0].focus();
		  }
		});
	}*/

	// Close any toast messages
  /*$( ".message-close" ).click(function() {
    $(".container-toast").hide("fast");
  });
*/
	// Needed for the "Back to Top" functionality
	/*$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        		// If page is scrolled more than 50px
			$('#return-to-top').addClass('visible');    // Fade in the arrow
		} else {
			$('#return-to-top').removeClass('visible'); // Else fade out the arrow
		}
	});

	$('#return-to-top').click(function() {				// When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       				// Scroll to top of body
		}, 500);
		// hack to reset focus to top of page
		document.body.setAttribute('tabindex','0');
		document.body.focus();
		document.body.removeAttribute('tabindex');
	});*/
    /*
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
	
	// open vvcs panel
	$('.vvcs-panel-btn').on('click', function(event){
		event.preventDefault();
		$('.panel-vvcs').addClass('is-visible');
	});
	// close the vvcs panel
	$('.panel-vvcs').on('click', function(event){
		if( $(event.target).is('.panel-vvcs') || $(event.target).is('.panel-close') ) { 
			$('.panel-vvcs').removeClass('is-visible');
			event.preventDefault();
		}
	});
	
	// open feedback panel
	$('.feedback-panel-btn').on('click', function(event){
		event.preventDefault();
		$('.panel-feedback').addClass('is-visible');
	});
	// close the feedback panel
	$('.panel-feedback').on('click', function(event){
		if( $(event.target).is('.panel-feedback') || $(event.target).is('.panel-close') ) { 
			$('.panel-feedback').removeClass('is-visible');
			event.preventDefault();
		}
	});
*/
/*
    // Help slide gesture
      let panels = $('.panel');
      panels.map((index, panel) => {
        let panelContainer = $(panel).find('.panel-container');
        let panelHeader = $(panel).find('.panel-header');
	let originX = 0;
        let lastX = 0;
	let dragging = false;
        let uiBunch = panelContainer.add(panelHeader);
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
            let newX = lastX - originX;
            if (newX >= 0)
              uiBunch.css({right: -newX + 'px'});
          }
	});
        uiBunch.on('mouseup touchend', (event) => {
          if (dragging && !$(event.target).is('.panel-close')) {
            dragging = false;
            let newX = (event.screenX || lastX) - originX;
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
      });*/
});
