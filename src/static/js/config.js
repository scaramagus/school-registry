import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let c of cookies) {
      const cookie = $.trim(c);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === `${name}=`) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function setCSRFToken() {
  $.ajaxSetup({
    beforeSend(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
        xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));
      }
    },
  });
}

// Append slash (/) to model url

function defaultAppendSlash() {
  const baseSync = Backbone.sync;
  Backbone.sync = (method, model, options) => {
    // Add trailing slash to backbone model views
    let baseUrl = _.isFunction(model.url) ? model.url() : model.url;
    baseUrl += baseUrl.charAt(baseUrl.length - 1) === '/' ? '' : '/';

    const newOptions = _.extend(options, {
      url: baseUrl,
    });

    return baseSync(method, model, newOptions);
  };
}

export const globalConfig = () => {
  setCSRFToken();
  defaultAppendSlash();
};
