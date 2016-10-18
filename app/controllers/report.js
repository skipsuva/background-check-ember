import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['email'],
  email: null,

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
