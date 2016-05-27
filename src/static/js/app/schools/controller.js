import Bb from 'backbone';
import Radio from 'backbone.radio';

import { schoolCollection } from './init.js';
import { SchoolsView, SchoolFormView } from './views.js';

const rootChannel = Radio.channel('root');


export const SchoolsController = {
  listSchools() {
    Bb.history.navigate('schools');
    const schoolsTableView = new SchoolsView({
      collection: schoolCollection,
    });
    rootChannel.trigger('show:view', schoolsTableView);
  },
  editSchool(id) {
    Bb.history.navigate(`schools/${id}`);
    const school = schoolCollection.get(id);
    const schoolFormView = new SchoolFormView({
      model: school,
    });
    schoolFormView.on('school:save', (data) => {
      school.save(data, { wait: true });
      this.listSchools();
    });
    rootChannel.trigger('show:view', schoolFormView);
  },
};
