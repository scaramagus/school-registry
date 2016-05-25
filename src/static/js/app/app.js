import Mn from 'backbone.marionette';
import { RootView } from './views.js';


const Application = Mn.Application.extend({
  onStart() {
    const rootView = new RootView();
    rootView.render();
  },
});

export const App = new Application();
