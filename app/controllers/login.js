import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      let exisitingUsers = JSON.parse(localStorage.getItem('users'));

      if(exisitingUsers.includes(email) && password === "BV-API-Challenge"){
        localStorage.setItem('currentUser', email);
        this.transitionToRoute('search');
      }else{
        this.set('errorMessage', "You entered the wrong email or password.");
      }

    }
  }

});
