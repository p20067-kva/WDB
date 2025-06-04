// ハンバーガーメニューの開閉

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  menu.addEventListener('click', function(e) {
    // メニュー内のリンクをクリックしたときだけ閉じる
    if(e.target.tagName === 'A') {
      menu.classList.remove('open');
      menuBtn.classList.remove('open');
    }
    e.stopPropagation();
  });

  document.addEventListener('click', function() {
    menu.classList.remove('open');
    menuBtn.classList.remove('open');
  });
});
