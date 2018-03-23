// To understand behaviors, see https://drupal.org/node/756722#behaviors
(function ($, Drupal, window, document, undefined) {

    Drupal.behaviors.uikit_messages = {
        attach: function (context, settings) {
            //add UIkit page alert classes to Drupal system messages
            $('.messages').addClass('uikit-page-alerts');
            $('.messages--warning').addClass('uikit-page-alerts--warning');
            $('.messages--error').addClass('uikit-page-alerts--error');
            $('.messages--status').addClass('uikit-page-alerts--info');
            $('<div class="section-divider full-width"><div class="arrow-down"></div></div>').insertAfter('.document-links-section');
            $('.form-submit').addClass('uikit-btn');
            //$('.views-exposed-form').addClass('container');
        }
    };


    Drupal.behaviors.hp_news_styling = {
        attach: function (context, settings) {
            //news
            $('.news-categories .view-header li').insertBefore('.news-categories ul>li:first');
            $('.views-row.tags').removeClass('col-md-6');
            $('.views-row-1.tags').addClass('full-width');
            $('.views-row-1.tags').wrapInner('<div class="container"></div>');
        }
    };


    Drupal.behaviors.uikit_messages = {
        attach: function (context, settings) {
            //change banner image to background
            var imgPath = $('.banner-image img').attr('src');
            $('.banner-image').css('background-image', 'url(' + imgPath + ')');
            $('.banner-image img').addClass('element-invisible');

            //main menu
            $('.region-navigation #block-superfish-1 .first a').prepend('<i class="fas fa-home"></i>');
        }
    };
    

    Drupal.behaviors.header_buttons = {
        attach: function (context, settings) {
            //setup classes for feedback webform

            $('.region-content-bottom .block-webform').addClass('from-right');
            $('.region-content-bottom .block-webform h2').wrap('<div class="panel-header"></div>');
            $('.region-content-bottom .block-webform form').wrap('<div class="panel-container"><div class="panel-content"></div></div>');
            $('.region-content-bottom .block-webform .form-actions').append(' <button class="panel-close uikit-btn uikit-btn--tertiary">Cancel</button>');
            $('.region-content-bottom .block-webform .panel-header').append('<a class="panel-close" href="javascript:void(0);">Close</a>');

            //Open and close feedback panel
            $('.feedback-link').click(function (event) {
                event.preventDefault();
                $('.region-content-bottom .block-webform').addClass('is-visible');
            });
            // close the feedback panel
            $('.region-content-bottom .block-webform .panel-close').click(function (event) {
                if ($(event.target).is('.region-content-bottom .block-webform') || $(event.target).is('.panel-close')) {
                    $('.region-content-bottom .block-webform').removeClass('is-visible');
                    event.preventDefault();
                }
            });


            //Open and close myservice login panel
            $('.logout').click(function (event) {
                event.preventDefault();
                $('#myservice-login').addClass('is-visible');
            });
            // close the feedback panel
            $('#myservice-login .panel-close').click(function (event) {
                if ($(event.target).is('#myservice-login') || $(event.target).is('.panel-close')) {
                    $('#myservice-login').removeClass('is-visible');
                    event.preventDefault();
                }
            });
        }
    };


    Drupal.behaviors.header_accordion = {
        attach: function (context, settings) {
            var open = false;
            $(".uikit-accordion__title").click(function () {
                open = !open;
                if (open) {
                    $(".accordion-toppanel-btn").text("Close");
                }
                else {
                    $(".accordion-toppanel-btn").text("24hr counselling and support services");
                }

                $(".uikit-accordion").toggleClass("accordion-open");
                $(".uikit-accordion").toggleClass("accordion-closed");
                $(".uikit-accordion__body").toggleClass("is-visible");
            });

        }
    };

})(jQuery, Drupal, this, this.document);
