'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  // Após o toggle, verificamos se o body está com dark-theme
  const isDark = document.body.classList.contains('dark-theme');

  // this = o próprio botão porque usamos function() e não arrow function
  this.textContent = isDark ? 'Claro' : 'Escuro';
});