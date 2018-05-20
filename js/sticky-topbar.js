!function(){
  //固定topBar
  let view = document.querySelector('#topBar');
  let controller = {
    view : null,
    init : function(view){
      this.view = view;
      this.addEvents();
    },
    addEvents : function(){
      let view = this.view;
      window.addEventListener('scroll',function(){
        if (window.scrollY > 0) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      })
    }
  }
  controller.init(view);
  //controller.init.call(controller,view),所以以上代码中的 this 为controller
}.call()