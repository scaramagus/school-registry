import Bb from 'backbone';
import * as URLS from '../urls.js';


export const SchoolModel = Bb.Model.extend({
  defaults: {
    name: '',
    address: '',
  },
});

export const SchoolCollection = Bb.Collection.extend({
  url: URLS.SCHOOLS,
  model: SchoolModel,
});
