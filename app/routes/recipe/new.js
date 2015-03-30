import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('recipe', {
      created: new Date().getTime()
    });
  },

  actions: {
    save: function() {
      var _this = this;
      this.controller.get('content').save().then(function(recipe) {
        _this.transitionTo('recipes.show', recipe);
        debugger;
      }).catch(function() {
        debugger;
      });
    },

    willTransition: function() {
      var recipe = this.controller.get('content');
      if (recipe.get('isDirty')) {
        recipe.destroyRecord();
      }
    }
  }
});
