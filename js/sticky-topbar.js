 //固定topBar
 window.addEventListener('scroll',function(){
  if (window.scrollY > 0) {
    topBar.classList.add('active');
  } else {
    topBar.classList.remove('active');
  }
})