var TagsCollection = Backbone.Collection.extend({
  model: TagModel,

});

var TagModel = Backbone.Model.extend({
  tag: ''
});

var tags = new TagsCollection([
  {tag: 'llamas'},
  {tag: 'pandas'},
  {tag: 'sloths'}
]);
