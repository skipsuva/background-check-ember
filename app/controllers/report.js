import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['email'],
  email: null,
  canSave: Ember.computed(function() {
    let currentReport = this.get('model');
    if(localStorage.getItem('reports')){
      let exisitingUserReports = JSON.parse(localStorage.getItem('reports')).filter(function(report) {
        return report.reportOwner === localStorage.currentUser;
      });
      return exisitingUserReports.filter(function(r) {
        return currentReport.emails[0].email_address === r.emails[0].email_address ;
      }).length === 0;
    }

    return true;
  }),

  actions: {
    search(){
      this.transitionToRoute('search');
    },

    saveReport(){
      let report = this.model;
      let exisitingReports = JSON.parse(localStorage.getItem('reports'));

      if(exisitingReports){
        exisitingReports.push(report);
        localStorage.setItem('reports', JSON.stringify(exisitingReports));
      }else{
        localStorage.setItem('reports', JSON.stringify([report]));
      }
      this.transitionToRoute('reports');
    }
  }
});
