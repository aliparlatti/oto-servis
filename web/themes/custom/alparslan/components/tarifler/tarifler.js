(function ($, Drupal, drupalSettings) {
     Drupal.behaviors.Slide = {
          attach: function (context, settings) {
               var splide = new Splide('#splide', {
                    type: 'loop',
                    drag: 'free',
                    perPage: 3,
                    gap: "1.5em",
                    arrows:false,
                    breakpoints: {
                         680: {
                              perPage: 1,
                         },
                         720: {
                              perPage: 2,
                         },
                         960: {
                              perPage: 2,
                         },
                         1200: {
                              perPage: 2,
                         },
                         1360: {
                              perPage: 3,
                         },
                         1410: {
                              perPage: 3,
                         },
                    },
                    classes: {
                         pagination: 'splide__pagination',   
                    }
               });
               
               splide.mount();
          }
     };

})(jQuery, Drupal, drupalSettings);
