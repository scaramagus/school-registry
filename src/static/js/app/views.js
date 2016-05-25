import Mn from 'backbone.marionette';

import { schoolsTableView } from './schools/init.js';

export const RootView = Mn.View.extend({
  el: '#main',
  template: '#root-view-template',
  regions: {
    root: '#root',
  },

  onRender() {
    this.showChildView('root', schoolsTableView);
  },
});
