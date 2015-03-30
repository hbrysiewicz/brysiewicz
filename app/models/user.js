import DS from 'ember-data';
import { ago } from 'ember-moment/computed';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  birthday: attr('date'),
  mother: belongsTo('user', { async: true }),
  father: belongsTo('user', { async: true }),
  siblings: hasMany('user', { async: true }),
  offspring: hasMany('user', { async: true }),
  age: ago('birthday', true)
});
