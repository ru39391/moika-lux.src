const formsArr = Array.from(document.querySelectorAll('form'));
formsArr.forEach(formsArrEl => {
  const formSubmitBtn = formsArrEl.querySelector('.btn');
  const formCheckboxPrivate = formsArrEl.querySelector('.form__checkbox_type_nospam');
  formCheckboxPrivate.addEventListener('change', e => {
    if(!e.target.checked) {
      formSubmitBtn.disabled = true;
    } else {
      formSubmitBtn.disabled = false;
    };
  });
});
