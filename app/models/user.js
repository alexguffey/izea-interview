import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name:DS.attr('string'),
	username:DS.attr('string'),
  website:DS.attr('string')
});
