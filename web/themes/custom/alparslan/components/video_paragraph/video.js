(function ($, Drupal, once) {
  Drupal.behaviors.autoPlayYouTubeModal = {
    attach: function (context, settings) {
      var triggerOpen = $("body").find('[data-tagVideo]');
      triggerOpen.once('autoPlayYouTubeModal').click(function () {
        var theModal = $(this).data("bs-target"),
          videoSRC = $(this).attr("data-tagVideo"),
          videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.btn-close').click(function () {
          $(theModal + ' iframe').attr('src', videoSRC);
        });
      });
      $('#videoModal').on('shown.bs.modal', function () {
        $('#video1')[0].play();
      })
      $('#videoModal').on('hidden.bs.modal', function () {
        $('#video1')[0].pause();
      })
    }
  }
})(jQuery, Drupal, once);