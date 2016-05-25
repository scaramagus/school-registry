import Mn from 'backbone.marionette';

import { SchoolCollection } from './models.js';

const SchoolTableRow = Mn.View.extend({
  tagName: 'tr',
  template: '#school-table-row-template',
});

const SchoolsTableBodyView = Mn.CollectionView.extend({
  tagName: 'tbody',
  template: '#schools-table-template',
  childView: SchoolTableRow,
});

export const SchoolsTableView = Mn.View.extend({
  tagName: 'table',
  className: 'table table-hover',
  template: '#schools-table-template',

  regions: {
    body: {
      selector: 'tbody',
      replaceElement: true,
    },
  },

  initialize() {
    this.collection = new SchoolCollection();
  },

  onAttach() {
    this.collection.fetch().then(() => {
      this.showChildView('body', new SchoolsTableBodyView({
        collection: this.collection,
      }));
    });
  },
});
