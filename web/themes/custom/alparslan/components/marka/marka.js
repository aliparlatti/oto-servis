(function ($, Drupal, drupalSettings) {
     Drupal.behaviors.Slide = {
          attach: function (context, settings) {
               var splide = new Splide('#splide', {
                    type: 'loop',
                    drag: 'free',
                    perPage: 4,
                    arrows:false,
                    pagination:false,
                    autoplay:true,
                    breakpoints: {
                         680: {
                              perPage: 2,
                         },
                         720: {
                              perPage: 3,
                         },
                         960: {
                              perPage: 3,
                         },
                         1200: {
                              perPage: 4,
                         },
                         1360: {
                              perPage: 4,
                         },
                         1410: {
                              perPage: 4,
                         },
                    },
               });
               
               splide.mount();
          }
     };

})(jQuery, Drupal, drupalSettings);
