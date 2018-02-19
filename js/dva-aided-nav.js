(function ($) {
    Drupal.behaviors.exampleModule = {
      attach: function (context, settings) {
         $('.sf-menu-aided-navigation .menuparent').unbind('mouseover');
         $('.sf-menu-aided-navigation .menuparent').click(function(e) {
            e.preventDefault();
            event.stopPropagation();
      })
    }
}
    
  }(jQuery));