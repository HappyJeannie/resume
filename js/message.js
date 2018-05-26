!function(){
  var APP_ID = '0r7UeXa1LVbwKLzTKIKvxueQ-gzGzoHsz';
  var APP_KEY = 'ELk4KGSA1TR3oAd091pwWi9m';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
  let imgs = ['0.png','1.png','2.png','3.png','4.png','5.png','6.png','7.png'];
  var query = new AV.Query('Message');
  query.find().then(
    function (messages) {
      let array = messages.map((item) => item.attributes);
      array.forEach((item) => {
        let obj = document.querySelector('#messageList');
        let li = document.createElement('li');
        li.innerHTML = `
                            <img src="./img/avatar/`+ imgs[Math.floor(Math.random() * imgs.length)] +`" alt="">
                            <span class="name">${item.name}</span>：
                            <span class="text">${item.msg}</span>
                        `;
        obj.append(li);
      })
    },()=>{
      alert('获取数据失败')
    });
  let myForm = document.querySelector('#postMessageForm');
  myForm.addEventListener('submit',function(e){
    e.preventDefault();
    let name = myForm.querySelector('input[name="name"]').value;
    let content = myForm.querySelector('input[name="content"]').value;
    //创建表
    let Message = AV.Object.extend('Message');
    //创建表中的一条数据
    let message = new Message();
    //存储一条数据到表中
    message.save({
      'name': name,
      'msg':content
    }).then(function(object) {//保存成功的回调
      // console.log(object);
      window.location.reload();
    })
  })
  // //创建表
  // var Message = AV.Object.extend('Message');
  // //创建表中的一条数据
  // var message = new Message();
  // //存储一条数据到表中
  // message.save({
  //   words: 'Hello World!'
  // }).then(function(object) {//保存成功的回调
  //   alert('LeanCloud Rocks!');
  // })
}.call()