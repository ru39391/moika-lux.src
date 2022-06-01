const togglers = Array.from(document.querySelectorAll(`[data-toggle="toggler"]`));

class Toggler {
  constructor(toggler, activeSelector) {
    this._toggler = toggler,
    this._target = toggler.getAttribute('data-target'),
    this._targetEl = document.querySelector(this._target),
    this._closeEl = this._targetEl.querySelector('[data-toggle="close"]') ? this._targetEl.querySelector('[data-toggle="close"]') : null,
    this._activeSelector = activeSelector
  }

  _checkSelector() {
    return this._targetEl.classList.contains(this._activeSelector);
  }

  _addSelector() {
    this._targetEl.classList.add(this._activeSelector);
    document.body.style.overflow = 'hidden';
  }

  _removeSelector() {
    this._targetEl.classList.remove(this._activeSelector);
    document.body.style = null;
  }

  _toggleSelector() {
    if(this._checkSelector()) {
      this._removeSelector();
    } else {
      this._addSelector();
    }
  }

  _setEvtListeners() {
    this._toggler.addEventListener('click', e => {
      e.preventDefault();
      this._toggleSelector();
    });

    if(this._closeEl) {
      this._closeEl.addEventListener('click', e => {
        this._removeSelector();
      });
    }
  }

  toggleActiveSelector() {
    this._setEvtListeners();
  }
}

if(togglers.length) {
  togglers.forEach(togglersEl => {
    const toggler = new Toggler(togglersEl, 'visible');
    toggler.toggleActiveSelector();
  });
}
