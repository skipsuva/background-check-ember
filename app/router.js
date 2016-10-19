import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landing', {path: "/"});
  this.route('login');
  this.route('register');
  this.route('search');
  this.route('report');
  this.route('reports');
});

export default Router;
