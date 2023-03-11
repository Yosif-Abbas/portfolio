class ModeView {
  _elements = document.querySelectorAll('.bulb');

  addHandlerMode(handler) {
    this._elements.forEach((el) => el.addEventListener('click', handler));
  }
}

export default new ModeView();
