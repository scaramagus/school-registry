import Bb from 'backbone';
import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';

import { RootView } from './views.js';
import { SchoolsRouter } from './schools/init.js';

const routerChannel = Radio.channel('router');

const Application = Mn.Application.extend({
  onStart() {
    Bb.history.start();

    const rootView = new RootView();
    rootView.render();

    if (Bb.history.fragment === '') {
      routerChannel.trigger('schools:list');
    }
  },
});

const schoolsRouter = new SchoolsRouter();

export const App = new Application();
