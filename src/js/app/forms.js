import Inputmask from 'inputmask';

const formsArr = Array.from(document.querySelectorAll('form'));
formsArr.forEach(formsArrEl => {
  const phoneInput = formsArrEl.querySelector('[name*="phone"]');
  const formSubmitBtn = formsArrEl.querySelector('.btn');
  const formCheckboxPrivate = formsArrEl.querySelector('.form__checkbox_type_nospam');
  formCheckboxPrivate.addEventListener('change', e => {
    if(!e.target.checked) {
      formSubmitBtn.disabled = true;
    } else {
      formSubmitBtn.disabled = false;
    };
  });

	Inputmask({
		mask: '+7 (999) 999-99-99',
        showMaskOnHover: false,
	}).mask(phoneInput);
});
