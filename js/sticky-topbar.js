!function(){
  //固定topBar
  let view = View('#topBar');
  let controller = Controller({
    init:function(){

    },
    bindEvents:function(){
      let view = this.view;
      window.addEventListener('scroll',function(){
        if (window.scrollY > 0) {
          view.classList.add('active');
        } else {
          view.classList.remove('active');
        }
      })
    }
  })
  controller.init(view);
}.call()