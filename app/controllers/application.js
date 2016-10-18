import Ember from 'ember';

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),

  actions: {
    logout() {
      localStorage.removeItem('currentUser');
      this.set('model', null);

      this.transitionToRoute('login');
    }
  }

});
