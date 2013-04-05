(function(){
  $('.flash-queue').on('click', '.flash-close', function(e){
    $(e.target.parentNode).remove();
  });
  function flash(msg) {
    $('.flash-inner').append(
      '<div class="flash"><span class="flash-msg">' +
      msg + '</span><span class="flash-close">×</span></div>'
    );
  }
})();
