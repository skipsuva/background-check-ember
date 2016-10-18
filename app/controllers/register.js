import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register(){
      let email = this.get('email');
      if(this.emailIsValid(email)){
        this.registerUser(email);
      }else{
        this.set('errorMessage', "Please enter a valid email address.");
      }
    }
  },

  emailIsValid(email){
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  },

  registerUser(email){
    let exisitingUsers = JSON.parse(localStorage.getItem('users'));

    if(exisitingUsers){
      exisitingUsers.push(email);
      localStorage.setItem('users', JSON.stringify(exisitingUsers));
    }else{
      localStorage.setItem('users', JSON.stringify([email]));
    }

    this.transitionToRoute('login');
  }
});
