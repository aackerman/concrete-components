;(function(){
  var queue = document.querySelector('.flash-queue'), classes, parent;
  var innerqueue = document.querySelector('.flash-inner');
  queue.addEventListener('click', function(e){
    classes = [].slice.call(e.target.classList);
    if (classes.some(function(v){ return v == 'flash-close'; })) {
      parent = e.target.parentNode;
      setTimeout(function(){
        parent.parentNode.removeChild(parent);
      }, 300);
    }
  });
  function flash(msg) {
    var f = document.createElement('div');
    f.className = 'flash';
    f.innerHTML = '<span class="flash-msg">'+msg+'</span><span class="flash-close">×</span>';
    innerqueue.appendChild(f);
  }
  window.flash = flash;
})();
