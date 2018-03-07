import DS from 'ember-data';
const { hasMany } = DS;

export default DS.Model.extend({
  name: DS.attr('string'),
  things: hasMany('thing', { polymorphic: true })
});
