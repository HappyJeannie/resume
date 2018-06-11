!function(){
  let view = View('section.message');
  let model = Model({resourceName : "Message"})
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
      this.model.init();
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
      this.myForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        this.saveMessage();
      })
    },
    saveMessage:function(){
      let myForm = this.myForm;
      let name = myForm.querySelector('input[name="name"]').value;
      let content = myForm.querySelector('input[name="content"]').value;
      if(content === '' || name === ''){
        alert('姓名和留言内容不能为空');
        return false;
      }
      this.model.save({name,content}).then((object)=> {//保存成功的回调
        // console.log(object);
        // window.location.reload();
        let item = object.attributes;
        let li = document.createElement('li');
        let imgs = this.imgs;
        li.innerHTML = `
                            <img src="./img/avatar/${imgs[Math.floor(Math.random() * imgs.length)]}">
                            <span class="name">${item.name}</span>：
                            <span class="text">${item.msg}</span>
                        `;
        this.messageList.append(li);
        this.myForm.reset();
      }).then(()=>{},(err)=>{
        console.log(err);
      })
    }
  }
  controller.init(view,model);
  
  
}.call()