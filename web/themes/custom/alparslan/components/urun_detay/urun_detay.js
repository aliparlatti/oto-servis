(function ($, Drupal, drupalSettings) {
     Drupal.behaviors.Slide2 = {
          attach: function (context, settings) {
               var splide = new Splide('#splide2', {
                    type: 'loop',
                    drag: 'free',
                    perPage: 1,
                    gap: "1.5em",
                    arrows:true,
                    pagination:false,
               });
               
               splide.mount();
          }
     };

})(jQuery, Drupal, drupalSettings);
