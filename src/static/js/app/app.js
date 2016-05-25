import Mn from 'backbone.marionette';
import { RootView } from './views.js';

window.Mn = Mn

const Application = Mn.Application.extend({
  onStart() {
    const rootView = new RootView();
    rootView.render();
  },
});

export const App = new Application();
