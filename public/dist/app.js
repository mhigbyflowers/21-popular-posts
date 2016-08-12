
  'use strict';
  let likes = 0;
  const thumbUp = document.querySelector('.thumb-up');
  const thumbDown = document.querySelector('.thumb-down');
  const number = document.querySelector('.likes-number');

  thumbUp.addEventListener('click', function () {
    likes++;
    number.innerHTML = likes;
  });
  thumbDown.addEventListener('click', function () {
    likes--;
    number.innerHTML = likes;
  });
