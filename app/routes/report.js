import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (!localStorage.currentUser) {
      this.transitionTo('login');
    }
  },

  afterModel(){
    this.controllerFor('search').set('isSearching', false);
  },

  model: function(params) {
    let query = params.email;
    let url = 'https://query.datadeckio.com/email?api_key=nHMapbi0co3hHH6N6IDHl8BJkDuOjQBO1nLbnNu9&email=' + query;
    return Ember.$.getJSON(url).then(function(data) {
      return {
        reportOwner: localStorage.currentUser,
        reportId: data.report_info.report_id,
        names: data.names,
        emails: data.emails,
        educations: data.educations,
        jobs: data.jobs,
        social: data.social,
        images: data.images
      };
    });
  }
});
