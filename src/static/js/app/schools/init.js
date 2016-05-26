import { SchoolCollection } from './models.js';
import { SchoolsView } from './views.js';

const schools = new SchoolCollection();

export const schoolsTableView = new SchoolsView({
  collection: schools,
});
