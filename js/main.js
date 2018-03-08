jQuery(document).ready(function($){

  //add UIkit page alert classes to Drupal system messages
  $('.messages').addClass('uikit-page-alerts');
  $('.messages--warning').addClass('uikit-page-alerts--warning');
  $('.messages--error').addClass('uikit-page-alerts--error');
  $('.messages--status').addClass('uikit-page-alerts--info');
  //$('<div class="section-divider full-width"><div class="arrow-down"></div></div>').insertAfter('.document-links-section');
  $('.form-submit').addClass('uikit-btn');
  //$('.views-exposed-form').addClass('container');
  //news
  $('.news-categories .view-header li').insertBefore('.news-categories ul>li:first');
  $('.views-row.tags').removeClass('col-md-6');
  $('.views-row-1.tags').addClass('full-width');
  $('.views-row-1.tags').wrapInner('<div class="container"></div>');

  //change banner image to background
 var imgPath = $('.banner-image img').attr('src');
 $('.banner-image').css('background-image','url('+imgPath+')');
 $('.banner-image img').addClass('element-invisible');

  //main menu
  $('.region-navigation #block-superfish-1 .first a').prepend('<i class="fas fa-home"></i>');


//Open and close feedback panel
$('.trial-message a').click (function(event){
    event.preventDefault();
    $('.panel.from-right').addClass('is-visible');
});
// close the feedback panel
$('.panel-feedback').click (function(event){
    if( $(event.target).is('.panel.from-right') || $(event.target).is('.panel-close') ) { 
        $('.panel.from-right').removeClass('is-visible');
        event.preventDefault();
    }
});
	// open feedback panel
	$('.feedback-panel-btn').click(function(event){
		event.preventDefault();
		$('.panel-feedback').addClass('is-visible');
	});
	// close the feedback panel
	$('.panel-feedback').click( function(event){
		if( $(event.target).is('.panel-feedback') || $(event.target).is('.panel-close') ) { 
			$('.panel-feedback').removeClass('is-visible');
			event.preventDefault();
		}
	});

});

