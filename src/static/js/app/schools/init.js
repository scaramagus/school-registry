import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';

import { SchoolCollection } from './models.js';
import { SchoolsController } from './controller.js';

const routerChannel = Radio.channel('router');

export const schoolCollection = new SchoolCollection();


export const SchoolsRouter = Mn.AppRouter.extend({
  appRoutes: {
    schools: 'listSchools',
    'schools/:id': 'editSchool',
  },
  controller: SchoolsController,
});

routerChannel.on('schools:list', SchoolsController.listSchools);
