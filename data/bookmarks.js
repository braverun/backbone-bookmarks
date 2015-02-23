var BookmarksCollection = Backbone.Collection.extend({
  model: BookmarkModel,

});

var BookmarkModel = Backbone.Model.extend({
  url:'',
  title: '',
  description: '',
  tag: ''
});

var bookmarks = new BookmarksCollection([
  {
    url: 'http://en.wikipedia.org/wiki/Llama',
    title: 'Lama Wiki',
    description: 'A great resource for llama research.',
    tag: 'llamas'
    },
  {
    url: 'http://en.wikipedia.org/wiki/Giant_panda',
    title: 'Panda Wiki',
    description: 'A great resource for Panda research.',
    tag: 'pandas'
    },
  {
    url: 'http://en.wikipedia.org/wiki/Sloth',
    title: 'Sloth Wiki',
    description: 'A great resource for sloth research.',
    tag: 'sloths'
    },
]);
