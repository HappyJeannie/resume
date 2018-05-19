let oBlock = document.querySelectorAll('[data-xxx]');
for (let i = 0; i < oBlock.length; i++) {
  oBlock[i].classList.add('offset');
}
findClosetAndRemoveOffset();
window.addEventListener('scroll',function(){
  findClosetAndRemoveOffset();
})
//滚动位置与导航对应
function findClosetAndRemoveOffset() {
  //滚动页面时对应导航显示active
  let oTarget = document.querySelectorAll('[data-xxx]');
  let minDistance = Math.abs(oTarget[0].offsetTop - window.scrollY);
  let minIndex = 0;
  for (let i = 0; i < oTarget.length; i++) {
    if (Math.abs(oTarget[i].offsetTop - window.scrollY) < minDistance) {
      minIndex = i;
      minDistance = Math.abs(oTarget[i].offsetTop - window.scrollY);
    }
  }
  oTarget[minIndex].classList.remove('offset');
  let targetId = oTarget[minIndex].id;
  let aTarget = document.querySelector('a[href="#' + targetId + '"]');
  var aParent = aTarget.parentNode.parentNode;
  let aSiblings = aParent.children;
  for (let i = 0; i < aSiblings.length; i++) {
    aSiblings[i].classList.remove('highlight');
  }
  aTarget.parentNode.classList.add('highlight');
}