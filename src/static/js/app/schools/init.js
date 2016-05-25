import { SchoolCollection } from './models.js';
import { SchoolsTableView } from './views.js';

const schools = new SchoolCollection();

export const schoolsTableView = new SchoolsTableView({
  collection: schools,
});
