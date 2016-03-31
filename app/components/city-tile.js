import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(city, params) {
      this.sendAction('update', city, params);
    },
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
