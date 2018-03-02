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

//Open and close feedback panel
$('.trial-message a').on('click', function(event){
    event.preventDefault();
    $('.panel.from-right').addClass('is-visible');
});
// close the feedback panel
$('.panel-feedback').on('click', function(event){
    if( $(event.target).is('.panel-feedback') || $(event.target).is('.panel-close') ) { 
        $('.panel-feedback').removeClass('is-visible');
        event.preventDefault();
    }
});

});

