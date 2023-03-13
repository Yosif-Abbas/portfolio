class SliderView {
  _parentElement = document.querySelector('.about_container');
  _buttonRight = document.querySelector('.btn_right');
  _buttonLeft = document.querySelector('.btn_left');
  _slideNumber = 0;
  _slideMax;

  addHanlderSlide(handler) {
    const slides = this._parentElement.querySelectorAll('.about_sec');
    this._slideMax = (slides.length - 1) * -1;
    handler(slides, 0);
    this._addHandlerSlideRight(handler, slides);
    this._addHandlerSlideLeft(handler, slides);
  }

  _addHandlerSlideRight(handler, slides) {
    const that = this;
    this._buttonRight.addEventListener('click', function () {
      that._slideMax >= that._slideNumber
        ? (that._slideNumber = 0)
        : that._slideNumber--;
      handler(slides, that._slideNumber);
    });
  }

  _addHandlerSlideLeft(handler, slides) {
    const that = this;
    this._buttonLeft.addEventListener('click', function () {
      0 <= that._slideNumber
        ? (that._slideNumber = that._slideMax)
        : that._slideNumber++;

      handler(slides, that._slideNumber);
    });
  }
}

export default new SliderView();
