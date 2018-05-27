!function(){
  let view = document.querySelector('section.message');
  var model = {
    initAV : function(){
      var APP_ID = '0r7UeXa1LVbwKLzTKIKvxueQ-gzGzoHsz';
      var APP_KEY = 'ELk4KGSA1TR3oAd091pwWi9m';
      AV.init({appId: APP_ID,appKey: APP_KEY});
    },
    fetch : function(){
      //存数据
      var query = new AV.Query('Message');
      return query.find();
    },
    save:function(name,content){
      //创建表
      let Message = AV.Object.extend('Message');
      //创建表中的一条数据
      let message = new Message();
      //存储一条数据到表中
      return message.save({
        'name': name,
        'msg':content
      })
    }
  }
  let controller = {
    view : null,
    model:null,
    imgs : ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png'],
    messageList : null,
    myForm:null,
    init : function(view,model){
      this.view = view;
      this.model = model;
      this.messageList = view.querySelector('#messageList');
      this.myForm = view.querySelector('#postMessageForm')
      this.model.initAV();
      this.loadMessages();
      this.bindEvents();
    },
    loadMessages:function(){
      let imgs = this.imgs;
      var query = new AV.Query('Message');
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item) => item.attributes);
          array.forEach((item) => {
            let li = document.createElement('li');
            let a = this;
            li.innerHTML = `
                                <img src="./img/avatar/`+ imgs[Math.floor(Math.random() * imgs.length)] +`" alt="">
                                <span class="name">${item.name}</span>：
                                <span class="text">${item.msg}</span>
                            `;
            this.messageList.append(li);
          })
        },()=>{
          alert('获取数据失败')
        });
    },
    bindEvents:function(){
      this.myForm.addEventListener('submit',function(e){
        e.preventDefault();
        this.saveMessage();
      })
    },
    saveMessage:function(){
      let myForm = this.myForm;
      let name = myForm.querySelector('input[name="name"]').value;
      let content = myForm.querySelector('input[name="content"]').value;
      this.model.save(name,content).then(function(object) {//保存成功的回调
        // console.log(object);
        // window.location.reload();
        let obj = document.querySelector('#messageList');
        let li = document.createElement('li');
        li.innerHTML = `
                            <img src="./img/avatar/`+ imgs[Math.floor(Math.random() * imgs.length)] +`" alt="">
                            <span class="name">${object.attributes.name}</span>：
                            <span class="text">${object.attributes.msg}</span>
                        `;
        obj.append(li);
        myForm.reset();
      })
    }
  }
  controller.init(view,model);
  
  
}.call()