jQuery(document).ready(function($){

  //add UIkit page alert classes to Drupal system messages
  $('.messages').addClass('uikit-page-alerts');
  $('.messages--warning').addClass('uikit-page-alerts--warning');
  $('.messages--error').addClass('uikit-page-alerts--error');
  $('.messages--status').addClass('uikit-page-alerts--info');
  $('<div class="section-divider full-width"><div class="arrow-down"></div></div>').insertAfter('.document-links-section');
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


//setup classes for feedback webform
$('#block-webform-client-block-1648').addClass('panel from-right');
$('#block-webform-client-block-1648 h2').wrap('<div class="panel-header"></div>');
$('#block-webform-client-block-1648 form').wrap('<div class="panel-container"><div class="panel-content"></div></div>');
$('#block-webform-client-block-1648 .form-actions').append(' <button class="panel-close uikit-btn uikit-btn--tertiary">Cancel</button>');
$('#block-webform-client-block-1648 .panel-header').append('<a class="panel-close" href="javascript:void(0);">Close</a>');

//Open and close feedback panel
$('.feedback-link').click(function(event){
    event.preventDefault();
    $('#block-webform-client-block-1648').addClass('is-visible');
});
// close the feedback panel
$('#block-webform-client-block-1648 .panel-close').click(function(event){
    if( $(event.target).is('#block-webform-client-block-1648') || $(event.target).is('.panel-close') ) { 
        $('#block-webform-client-block-1648').removeClass('is-visible');
        event.preventDefault();
    }
});


//Open and close myservice login panel
$('.logout').click(function(event){
    event.preventDefault();
    $('#myservice-login').addClass('is-visible');
});
// close the feedback panel
$('#myservice-login .panel-close').click(function(event){
    if( $(event.target).is('#myservice-login') || $(event.target).is('.panel-close') ) { 
        $('#myservice-login').removeClass('is-visible');
        event.preventDefault();
    }
});
	

});

