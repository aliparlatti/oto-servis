(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.moreRead = {
    attach: function (context, settings) {
      jQuery(function ($) {
        $('.more').once('moreRead').click(function (e) {
          e.preventDefault();
          $(this).text(function (i, t) {
            if($('.dot').css('display') === 'block')
          {
            $('.dot').addClass('is-disable')
            
          }
          else
          {
            $('.dot').removeClass('is-disable')
          }
            return t == Drupal.t('Daha Az') ? Drupal.t('Daha Fazla') : Drupal.t('Daha Az');
          }).prev('.more-cont').slideToggle();
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);