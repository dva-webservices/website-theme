jQuery(document).ready(function($){

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
  $('.news-categories .view-header li').insertBefore('.news-categories ul>li:first');


});

