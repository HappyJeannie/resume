window.Model = function(options){
  let resourceName = options.resourceName;
  return {
    init : function(){
      var APP_ID = '0r7UeXa1LVbwKLzTKIKvxueQ-gzGzoHsz';
      var APP_KEY = 'ELk4KGSA1TR3oAd091pwWi9m';
      AV.init({appId: APP_ID,appKey: APP_KEY});
    },
    fetch : function(){
      //存数据
      var query = new AV.Query(resourceName);
      return query.find();
    },
    save:function(object){
      //创建表
      let Message = AV.Object.extend(resourceName);
      //创建表中的一条数据
      let message = new Message();
      //存储一条数据到表中
      return message.save(object)
    }
  }
}