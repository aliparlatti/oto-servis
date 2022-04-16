(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.drpBehavior = {
    attach: function (context, settings) {
      // can access setting from 'drupalSettings';
      $('#theme_modal').once('theme_modal').each(function () {
        Date.prototype.addHours = function (h) {
          this.setTime(this.getTime() + (h * 60 * 60 * 1000));
          return this;
        }

        var modalOpen = false;
        var blockView = drupalSettings.drp.drpJS.block_view;

        if (blockView['field_popup_number_of_views'][0]) {
          var numberView = blockView['field_popup_number_of_views'][0]['#markup'];
        }

        if (blockView['field_popup_start_publish_date'][0]) {
          var startDate = new Date(blockView['field_popup_start_publish_date'][0]['#attributes']['datetime']);
        }

        if (blockView['field_popup_last_publish_date'][0]) {
          var lastDate = new Date(blockView['field_popup_last_publish_date'][0]['#attributes']['datetime']);
        }

        if (blockView['field_popup_expiry_time'][0]) {
          var expiryTime = blockView['field_popup_expiry_time'][0]['#markup'];
          var expiryDate = new Date().addHours(expiryTime);
        }

        if (blockView['field_popup_show_when_leave'][0] && blockView['field_popup_show_when_leave'][0]['#markup'] == 1) {
          $(document).bind("mouseleave", function (e) {
            if (e.pageY - $(window).scrollTop() <= 1) {
              if (!modalOpen) {
                checkModal();
              }
            }
          });
        }

        if (blockView['field_popup_delay_time'][0] && blockView['field_popup_delay_time'][0]['#markup'] !== "0") {
          setTimeout(() => {
            if (!modalOpen) {
              checkModal();
            }
          }, blockView['field_popup_delay_time'][0]['#markup'] * 1000);
        } else if (blockView['field_popup_delay_time'][0] && blockView['field_popup_delay_time'][0]['#markup'] == "0") {
          checkModal();
        }
        if (blockView['field_popup_scroll_percent'][0]) {
          var scrollPercentage = blockView['field_popup_scroll_percent'][0]['#markup'];
        }

        if (scrollPercentage && scrollPercentage > 0) {
          $(window).scroll(function (e) {
            var scrollTop = $(window).scrollTop();
            var docHeight = $(document).height();
            var winHeight = $(window).height();
            var scrollPercent = (scrollTop) / (docHeight - winHeight);
            var scrollPercentRounded = Math.round(scrollPercent * 100);

            if (scrollPercentage && scrollPercentRounded >= scrollPercentage && !modalOpen) {
              modalOpen = true;
              if (modalOpen) {
                checkModal()
              }
              $(window).off('scroll');
            }
          });
        }

        function checkModal() {
          var nowDate = new Date();
          var cacheId = blockView['#cache']['tags'][0];
          var res = cacheId.replace(":", "_");

          // Daha önce bu popup ile ilgili cookie var mı kontrol ediyoruz.
          if (startDate || lastDate) {
            if (numberView || numberView > 0) {
              if (!$.cookie('theme_modal_view_' + res) || Number($.cookie('theme_modal_view_' + res)) < numberView) {
                if (startDate && lastDate) {
                  if ((startDate <= nowDate && nowDate <= lastDate)) {
                    $('#theme_modal').modal('show');
                    modalOpen = true;
                  }
                } else if (!startDate && lastDate) {
                  if (nowDate <= lastDate) {
                    $('#theme_modal').modal('show');
                    modalOpen = true;
                  }
                } else if (startDate && !lastDate) {
                  if (startDate <= nowDate) {
                    $('#theme_modal').modal('show');
                    modalOpen = true;
                  }
                }
                if (!modalOpen) return;
                if (!$.cookie('theme_modal_view_' + res)) {
                  if (expiryDate) {
                    $.cookie('theme_modal_view_' + res, 1, {
                      expires: expiryDate,
                      path: '/'
                    });
                  } else if (lastDate) {
                    $.cookie('theme_modal_view_' + res, 1, {
                      expires: lastDate,
                      path: '/'
                    });
                  } else {
                    $.cookie('theme_modal_view_' + res, 1, {
                      expires: 1,
                      path: '/'
                    });
                  }
                } else {
                  var say = Number($.cookie('theme_modal_view_' + res)) + 1;
                  if (expiryDate) {
                    $.cookie('theme_modal_view_' + res, say, {
                      expires: expiryDate,
                      path: '/'
                    });
                  } else if (lastDate) {
                    $.cookie('theme_modal_view_' + res, say, {
                      expires: lastDate,
                      path: '/'
                    });
                  } else {
                    $.cookie('theme_modal_view_' + res, say, {
                      expires: 1,
                      path: '/'
                    });
                  }
                }
              }
            } else {
              if (startDate && lastDate) {
                if ((startDate <= nowDate && nowDate <= lastDate)) {
                  $('#theme_modal').modal('show');
                }
              } else if (!startDate && lastDate) {
                if (nowDate <= lastDate) {
                  $('#theme_modal').modal('show');
                }
              } else if (startDate && !lastDate) {
                if (startDate <= nowDate) {
                  $('#theme_modal').modal('show');
                }
              }
            }
          } else {
            $('#theme_modal').modal('show');
          }
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
