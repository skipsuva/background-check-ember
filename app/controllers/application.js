import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),

  actions: {
    logout() {
      localStorage.removeItem('currentUser');
      // template is not refreshed
      this.transitionToRoute('login');
    }
  }

});
