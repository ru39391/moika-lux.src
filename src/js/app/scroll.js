const btnScrolltoArr = document.querySelectorAll('.anchor-scrollto');
btnScrolltoArr.forEach(btnScrolltoArrEl => {
  btnScrolltoArrEl.addEventListener('click', e => {
    const target = document.querySelector(`.${e.currentTarget.getAttribute('data-target')}`);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
