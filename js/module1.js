!function(){
  let person = {
    name:'summer',
    age:18
  }
  window.growUp = function(){
    person.age += 1;
    return person.age;
  }
}.call()