import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register(){
      let email = this.get('email');
      let exisitingUsers = JSON.parse(localStorage.getItem('users'));

      if(exisitingUsers){
        exisitingUsers.push(email);
        localStorage.setItem('users', JSON.stringify(exisitingUsers));
      }else{
        localStorage.setItem('users', JSON.stringify([email]));
      }

      this.transitionToRoute('login');
    }
  }
});
