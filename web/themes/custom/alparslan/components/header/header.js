(function ($, Drupal, drupalSettings) {
     Drupal.behaviors.Sticky = {
          attach: function (context, settings) {
               $(window).once('Sticky').scroll(function () {
                    var sticky = $('.sticky'),
                         scroll = $(window).scrollTop();
                    if (scroll >= 1) {
                         sticky.addClass('fixed shadow-sm my-lg-1')
                         sticky.removeClass('my-lg-2')
                    }
                    else {
                         sticky.removeClass('fixed shadow-sm my-lg-1')
                         sticky.addClass('my-lg-2')
                    }
               });
               $(".navbar-toggler").once('Sticky').click(function () {
                    $(this).toggleClass("is-active");
               });
          }
     };

})(jQuery, Drupal, drupalSettings);
