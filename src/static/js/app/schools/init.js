import { SchoolsView } from './views.js';
import { App } from '../app.js';


const schoolsView = new SchoolsView();

App.on('start', () =>
  App.getRegion('main').show(schoolsView)
);
