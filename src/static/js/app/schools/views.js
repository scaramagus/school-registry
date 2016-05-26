import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';
import _ from 'underscore';


const schoolsChannel = Radio.channel('schools');

const SchoolTableRow = Mn.View.extend({
  tagName: 'tr',
  template: '#school-table-row-template',
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

const SchoolFormView = Mn.View.extend({
  template: '#school-form-template',
  tagName: 'form',

  events: {
    submit: 'onSubmit',
  },

  onSubmit(event) {
    event.preventDefault();
    const data = this.$el.serializeArray();
    const formData = _.object(_.pluck(data, 'name'), _.pluck(data, 'value'));
    schoolsChannel.trigger('collection:add', formData);
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
    this.showChildView('form', new SchoolFormView());
  },
});
