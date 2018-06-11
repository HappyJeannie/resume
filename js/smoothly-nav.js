!function(){
  let view = View('nav.menu');
  let controller = {
    view : null,
    aTags : null,
    initAnimation : function(){
      requestAnimationFrame(animate);
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }    
    },
    init : function(view){
      this.view = view;
      this.aTags = this.view.querySelectorAll('nav.menu>ul>li>a');
      this.initAnimation();
      this.bindEvents();
      
    },
    bindEvents : function(){
      let aTags = this.aTags;
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (e) => {
          e.preventDefault();
          let target = e.currentTarget;
          this.scrollToElement(target);
        }
      }
    },
    scrollToElement : function(target){
      let targetId = target.getAttribute('href');
    
      let currentTop = document.documentElement.scrollTop || document.body.scrollTop;
      let targetTop = document.querySelectorAll(targetId)[0].offsetTop - 60;

      var coords = { x: 0, y: currentTop };
      var tween = new TWEEN.Tween(coords)
        .to({ x: 0, y: targetTop }, 500)
        .easing(TWEEN.Easing.Sinusoidal.In)
        .onUpdate(function () {
          window.scrollTo(0, coords.y)
        })
        .start();
    }
  }
  controller.init(view);
}.call()