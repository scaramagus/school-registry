import Mn from 'backbone.marionette';
import { RootView } from './views.js';


export const rootView = new RootView();

const Application = Mn.Application.extend({
  onStart() {
    rootView.render();
  },
});

export const App = new Application();
