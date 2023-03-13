import modeView from './views/modeView';
import moveView from './views/moveView';
import ModelView from './views/ModelView';
import sliderView from './views/sliderView';
import tabModelView from './views/tabModelView';

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
    child.classList.contains('hidden')
      ? child.classList.remove('hidden')
      : child.classList.add('hidden');
  }
};

const controlModelVisable = function (parentEl) {
  parentEl.classList.remove('hidden');
};

const controlModelUnvisible = function (parentEl) {
  parentEl.classList.add('hidden');
};

const controlSlide = function (slides, slideNumber) {
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${(i + slideNumber) * 100}%)`)
  );
};

const controlTab = function (tabs, containers, tabEl) {
  tabs.forEach((tab, i) => {
    tab.classList.remove('clicked');
    containers[i].classList.contains(
      `projects_content-container--${tabEl.dataset.tab}`
    )
      ? containers[i].classList.remove('hidden')
      : containers[i].classList.add('hidden');
  });
  tabEl.classList.add('clicked');
};

const init = function () {
  modeView.addHandlerMode(controlMode);
  moveView.addHandlerMoveUp(controleMoveUp);
  ModelView.addHandlerModel(controlModel);
  ModelView.addHandlerModelVisability(
    controlModelVisable,
    controlModelUnvisible
  );
  sliderView.addHanlderSlide(controlSlide);
  tabModelView.addHandlerTab(controlTab);
};

init();
