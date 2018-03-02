jQuery(document).ready(function($){
    $('.sf-menu-aided-navigation .menuparent').off('mouseenter mouseout');
    $('<i class="fas fa-arrow-left" style="display:none;"></i>').insertAfter('#block-superfish-3 h2.block-title');
    $('.sf-menu-aided-navigation .menuparent a').off('click').on('click', function(event){
        event.preventDefault();
    $('.sf-menu-aided-navigation .menuparent ul').removeClass('sf-hidden').addClass('animated slideInRight sf-menu-aided-navigation-new sf-menu-aided-navigation-object');
    $( "svg.svg-inline--fa.fa-arrow-left.fa-w-14" ).toggle( "slow", function() {
    });
    
});
});