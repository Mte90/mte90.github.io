$(function () {
  $('.freeze').freezeframe({
    'animation_play_duration': Infinity,
    'non_touch_device_trigger_event': 'click'
  });
});

function animateGif() {
  if ($('.present canvas:not(.stopped)').hasClass('ff-canvas-ready')) {
    $('.present .freeze').trigger('click');
    return true;
  }
  if ($('.present img').hasClass('stop')) {
    $('.present img').freezeframe({
      'animation_play_duration': Infinity,
      'non_touch_device_trigger_event': 'click'
    }).removeClass('stop')
    $('.present canvas').addClass('stopped');
    return true;
  }
  Reveal.next();
}
