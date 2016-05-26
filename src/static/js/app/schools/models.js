import Bb from 'backbone';
import * as URLS from '../urls.js';

const schoolsChannel = Bb.Radio.channel('schools');

export const SchoolModel = Bb.Model.extend({
  defaults: {
    name: '',
    address: '',
  },
});

export const SchoolCollection = Bb.Collection.extend({
  url: URLS.SCHOOLS,
  model: SchoolModel,

  initialize() {
    schoolsChannel.on('collection:add', (data) => {
      this.create(data, { wait: true });
    });
  },
});
