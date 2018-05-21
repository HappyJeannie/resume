!function(){
  var APP_ID = '0r7UeXa1LVbwKLzTKIKvxueQ-gzGzoHsz';
  var APP_KEY = 'ELk4KGSA1TR3oAd091pwWi9m';

  AV.init({
    appId: APP_ID,
    appKey: APP_KEY
  });
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