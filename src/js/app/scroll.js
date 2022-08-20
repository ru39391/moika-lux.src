const btnScrollto = document.querySelector('.anchor-scrollto');
const target = document.querySelector(`.${btnScrollto.getAttribute('data-target')}`);
if(target) {
  btnScrollto.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth' });
  });
}
