import modeView from './views/modeView';

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

const init = function () {
  modeView.addHandlerMode(controlMode);
  
};

init();
