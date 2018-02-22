(function($) {
  $(window).bind('load', function(){
  $('.sf-menu-aided-navigation .menuparent').unbind('mouseover');
  $('.sf-menu-aided-navigation .menuparent').unbind('mouseleave');
  $('.sf-menu-aided-navigation .menuparent').on('click', function(event) {
  $('ul').removeClass('sf-hidden').addClass('sf-menu-aided-navigation-new');
     event.preventDefault();
})
    });
  
}(jQuery));