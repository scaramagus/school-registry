import Mn from 'backbone.marionette';
import _ from 'underscore';

import { SchoolModel } from './models.js';

const SchoolTableRow = Mn.View.extend({
  tagName: 'tr',
  template: '#school-table-row-template',
  events: {
    'click .delete-item': 'deleteItem',
  },
  deleteItem(event) {
    event.preventDefault();
    this.model.destroy();
  },
});

const SchoolsTableBodyView = Mn.CollectionView.extend({
  tagName: 'tbody',
  childView: SchoolTableRow,
});

const SchoolsTableView = Mn.View.extend({
  tagName: 'table',
  className: 'table table-striped',
  template: '#schools-table-template',

  regions: {
    body: {
      selector: 'tbody',
      replaceElement: true,
    },
  },

  onAttach() {
    this.collection.fetch().then(() => {
      this.showChildView('body', new SchoolsTableBodyView({
        collection: this.collection,
      }));
    });
  },
});

export const SchoolFormView = Mn.View.extend({
  template: '#school-form-template',
  tagName: 'form',

  events: {
    submit: 'onSubmit',
  },

  model: new SchoolModel(),

  onSubmit(event) {
    event.preventDefault();
    const data = this.$el.serializeArray();
    const formData = _.object(_.pluck(data, 'name'), _.pluck(data, 'value'));
    this.trigger('school:save', formData);
    this.$el.find(':input').val('');
  },
});

export const SchoolsView = Mn.View.extend({
  template: '#schools-template',

  regions: {
    table: {
      selector: 'table',
      replaceElement: true,
    },
    form: {
      selector: 'form',
      replaceElement: true,
    },
  },

  onAttach() {
    this.showChildView('table', new SchoolsTableView({
      collection: this.collection,
    }));
    const formView = new SchoolFormView();
    this.showChildView('form', formView);

    formView.on('school:save', (data) => {
      this.collection.create(data, { wait: true });
    });
  },
});
