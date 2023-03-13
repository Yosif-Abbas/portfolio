class ModelView {
  _parentElement = document.querySelector('.model');
  _exitBtn = document.querySelector('.btn-exit');
  _openBtn = document.querySelector('.btn-open');
  _header = document.querySelector('.nav');

  addHandlerModel(handler1) {
    const parentEl = this._parentElement;
    const openBtn = this._openBtn;
    const exitBtn = this._exitBtn;
    [exitBtn, openBtn].forEach((btn) =>
      btn.addEventListener('click', function () {
        handler1(parentEl);
      })
    );
  }

  addHandlerModelVisability(handler1, handler2) {
    const parentEl = this._parentElement;
    const callback = function (entries) {
      const [entry] = entries;
      entry.isIntersecting ? handler2(parentEl) : handler1(parentEl);
      
    };

    const options = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this._header);
  }
}

export default new ModelView();
