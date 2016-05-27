require('bootstrap/scss/bootstrap.scss');

import { globalConfig } from './config.js';
import { App } from './app/app.js';

App.on('start', () => {
  globalConfig();
});

App.start();
