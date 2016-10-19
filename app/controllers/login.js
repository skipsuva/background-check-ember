import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');
      let exisitingUsers = JSON.parse(localStorage.getItem('users'));

      if(exisitingUsers.includes(email) && password === "BV-API-Challenge"){
        this.setCurrentUser(email);
        this.transitionToRoute('search');
      }else{
        this.set('errorMessage', "You entered the wrong email or password.");
      }
    }
  },

  setCurrentUser(email) {
    localStorage.setItem('currentUser', email);
    this.controllerFor('application').set('model', email);
  }

});
