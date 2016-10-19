import Ember from 'ember';

export default Ember.Component.extend({
  canShowImage: Ember.computed(function() {
    let currentReport = this.get('model');
    if(currentReport.images.length > 0){
      return true;
    }
    return false;
  }),
  imageUrl: Ember.computed(function() {
    let currentReport = this.get('model');
    if(this.get('canShowImage')){
      return currentReport.images[0].url;
    }
  }),

  actions: {
  }
});
