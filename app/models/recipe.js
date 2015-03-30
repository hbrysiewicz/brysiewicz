import DS from 'ember-data';
import { ago } from 'ember-moment/computed';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  title: attr('string'),
  estimatedTime: attr('string'),
  ingredients: attr('string'),
  steps: attr('string'),
  author: belongsTo('user', { async: true }),
  created: attr('date'),
  createdMoment: ago('created',true)
});
