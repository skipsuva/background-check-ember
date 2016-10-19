import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    logout() {
      localStorage.removeItem('currentUser');
      this.set('model', null);

      this.transitionToRoute('landing');
    }
  }

});
