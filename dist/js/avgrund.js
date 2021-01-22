(function($) {
  'use strict';
  $(function() {
    $('#show').avgrund({
      height: 500,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'x',
      onBlurContainer: '.container-scroller',
      template: '<p>So implement your design and place content here! If you want to close modal, please hit "Esc", click somewhere on the screen or use special button.</p>' +
        '<div>' +
        '<a href="https://www.facebook.com/daengcoding012" target="_blank" class="facebook btn btn-facebook btn-block">Facebook</a>' +
        '<a href="https://github.com/daengcoding" target="_blank" class="github btn btn-github btn-block">Github</a>' + 
        '<a href="https://twitter.com/rintoharahap012" target="_blank" class="twitter btn btn-twitter btn-block">Twitter</a>' +
        '</div>' +
        '<div class="text-center mt-4">' +
        '<a href="#" class="btn btn-success mr-2">Great!</a>' +
        '<a href="#" class="btn btn-light">Cancel</a>' +
        '</div>'
    });
  })
})(jQuery);