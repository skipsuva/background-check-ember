import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (!localStorage.currentUser) {
      this.transitionTo('login');
    }
  },

  model: function() {
    if(localStorage.getItem('reports')){
      let reports = JSON.parse(localStorage.getItem('reports')).filter(function(report) {
        return report.reportOwner === localStorage.currentUser;
      });
      return reports;
    }
  }
});
