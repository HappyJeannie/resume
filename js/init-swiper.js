!function(){
  let view = View('#mySlides');
  let controller = Controller({
    swiper:null,
    swiperOptions : {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    init:function(view,model){
      this.initSwiper();
    },
    initSwiper:function(){
      let view = this.view;
      this.swiper = new Swiper (
        view.querySelector('.swiper-container'),
        this.swiperOptions  
      ) 
    },
    bindEvents:function(){}
  })
  //轮播
  // let controller = {
  //   view : null,
  //   swiper : null,
  //   swiperOptions : {
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     }
  //   },
  //   init : function(view){
  //     this.view = view;
  //     this.initSwiper();
  //   },
  //   initSwiper : function(){
  //     let view = this.view;
  //     this.swiper = new Swiper (
  //       view.querySelector('.swiper-container'),
  //       this.swiperOptions  
  //     ) 
  //   }
  // }
  controller.init(view);
}.call()
