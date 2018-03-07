import DS from 'ember-data';
import Thing from './thing';

export default Thing.extend({
  name: DS.attr('string')
});
