import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes');
  this.resource('recipe', function() {
    this.route('index', { path: ':recipe_id' });
    this.route('new');
  });
});

export default Router;
