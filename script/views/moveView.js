class MoveView {
  _element = document.querySelector('.btn-arrow-up');

  addHandlerMoveUp(handler) {
    this._element.addEventListener('click', handler);
  }
}

export default new MoveView();
