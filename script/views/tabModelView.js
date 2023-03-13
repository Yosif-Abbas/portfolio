class TabModelView {
  _parentElement = document.querySelector('.projects_container');
  _tabContainer = document.querySelector('.projects_tab-container');
  _tabs = document.querySelectorAll('.projects_tab');
  _contentContainers = document.querySelectorAll('.projects_content-container');

  addHandlerTab(handler) {
    const that = this;
    this._tabContainer.addEventListener('click', function (e) {
      const tab = e.target.closest('.projects_tab');
      if (!tab) return;
      handler(that._tabs, that._contentContainers, tab);
    });
  }

  _interactiveContainer(tabNumber) {}
}

export default new TabModelView();
