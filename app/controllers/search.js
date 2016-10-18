import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchEmail(){
      let query = this.get('emailQuery');
      if(this.queryIsValid(query)){
        this.set('emailQuery', '');
        this.transitionToRoute('report', { queryParams: {email: query} });
      }else{
        this.set('errorMessage', "Please enter a valid email address.");
      }
    }

  },

  queryIsValid(query){
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(query);
  }
});
