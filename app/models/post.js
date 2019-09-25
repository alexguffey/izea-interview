import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  user:DS.belongsTo('user'),
  title:DS.attr('string'),
  body:DS.attr('string'),
});
