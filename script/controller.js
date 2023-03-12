import modeView from './views/modeView';
import moveView from './views/moveView';
import ModelView from './views/ModelView';

if (module.hot) {
  module.hot.accept();
}

const controlMode = function () {
  const root = document.documentElement;
  const darkBackground = getComputedStyle(root).getPropertyValue('--dark-bg');
  const lightBackground = getComputedStyle(root).getPropertyValue('--light-bg');
  const dark = getComputedStyle(root).getPropertyValue('--dark');
  const light = getComputedStyle(root).getPropertyValue('--light');

  root.style.setProperty('--dark', light);
  root.style.setProperty('--light', dark);

  root.style.setProperty('--light-bg', darkBackground);
  root.style.setProperty('--dark-bg', lightBackground);
};

const controleMoveUp = function () {
  const header = document.querySelector('.header');
  header.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  });
};

const controlModel = function (parentEl) {
  for (const child of parentEl.children) {
    getComputedStyle(child).display === 'none'
      ? (child.style.display = 'flex')
      : (child.style.display = 'none');
  }
};

const controlModelVisable = function (parentEl) {
  parentEl.classList.remove('hidden');
};

const controlModelUnvisible = function (parentEl) {
  parentEl.classList.add('hidden');
};

const init = function () {
  modeView.addHandlerMode(controlMode);
  moveView.addHandlerMoveUp(controleMoveUp);
  ModelView.addHandlerModel(controlModel);
  ModelView.addHandlerModelVisability(
    controlModelVisable,
    controlModelUnvisible
  );
};

init();
