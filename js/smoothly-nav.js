requestAnimationFrame(animate);
    let aTags = document.querySelectorAll('nav.menu>ul>li>a');
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].onclick = function (e) {
        e.preventDefault();
        let target = e.currentTarget;
        let targetId = target.getAttribute('href');

        let currentTop = document.documentElement.scrollTop || document.body.scrollTop;
        let targetTop = document.querySelectorAll(targetId)[0].offsetTop - 60;

        var coords = { x: 0, y: currentTop };
        var tween = new TWEEN.Tween(coords)
          .to({ x: 0, y: targetTop }, time)
          .easing(TWEEN.Easing.Sinusoidal.In)
          .onUpdate(function () {
            window.scrollTo(0, coords.y)
          })
          .start();
      }
    }
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }