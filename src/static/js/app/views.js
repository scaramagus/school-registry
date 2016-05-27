import Mn from 'backbone.marionette';
import Radio from 'backbone.radio';

const rootChannel = Radio.channel('root');

export const RootView = Mn.View.extend({
  el: '#main',
  template: '#root-view-template',
  regions: {
    root: '#root',
  },

  onRender() {
    rootChannel.on('show:view', (view) => {
      this.showChildView('root', view);
    });
  },
});
