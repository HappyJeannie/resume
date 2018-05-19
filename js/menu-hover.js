  //鼠标悬停显示下拉菜单，其实明明可以用css解决的问题为什么要用JS，完全不理解，算了，就练练手吧
  let liTags = document.querySelectorAll('nav.menu>ul>li');
  console.log(liTags);
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
      let target = e.currentTarget;
      target.classList.add('active');
    }
    liTags[i].onmouseleave = function (e) {
      let target = e.currentTarget;
      target.classList.remove('active');
    }
  }