import Mn from 'backbone.marionette';
import { SchoolsView } from './schools/views.js';

export const RootView = Mn.View.extend({
  el: '#main',
  template: '#root-view-template',
  regions: {
    root: '#root',
  },

  onRender() {
    this.showChildView('root', new SchoolsView());
  },
});
