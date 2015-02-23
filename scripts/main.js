(function(){
  'use strict';

  window.App = window.App || {};

  //
  // Dumb Data
  //

  var dumData = {
    url: 'http://en.wikipedia.org/wiki/Llama',
    title: 'Lama Wiki',
    description: 'A great resource for llama research.',
    tag: 'llamas'
  };

  var dumTag = {tag: 'whatever'};

  //
  // Models
  //

  var BookmarkModel = Backbone.Model.extend({
    defaults: {
      url: '',
      title: '',
      description '',
      tag: '',
    }

    var bookmarks =
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
      };
  });



  //
  // Views
  //

  var CountView = Backbone.View.extend({
    template : _.template($('#count-template').text()),

    render: function(){
      this.$el.html(this.template());
      return this;
    }
  });

  var BookmarksListView = Backbone.View.extend({
    template : _.template($('#bookmarks-template').text()),

    render: function(){
      this.$el.html(this.template());
      return this;
    }
  });

  var BookmarksItemView = Backbone.View.extend({
    tagName: 'li',
    template : _.template($('#bookmarks-item-template').text()),

    render: function(){
      $('.js-bookmarks-ul').append(this.el);
      this.$el.html(this.template(dumData));
      return this;
    }

  });


  var TagsListView = Backbone.View.extend({
    template : _.template($('#tags-template').text()),

    render: function(){
      this.$el.html(this.template());
      return this;
    }
  });

  var TagItemView = Backbone.View.extend({
    tagName: 'li',
    template : _.template($('#tag-item-template').text()),

    render: function(){
      $('.js-tags-ul').append(this.el);
      this.$el.html(this.template(dumTag));
      return this;
    }

  });

  //
  // Router
  //

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    initialize: function(){
      this.countView = new CountView({el: '.js-count'});
      this.bookmarksListView = new BookmarksListView({el: '.js-bookmarks-ul'});
      this.tagsListView = new TagsListView({el: '.js-tags'});
      this.bookmarksItemView = new BookmarksItemView();
      this.tagItemView = new TagItemView();
    },

    index: function(){
      this.countView.render();
      this.bookmarksListView.render();
      this.bookmarksItemView.render();
      this.tagsListView.render();
      this.tagItemView.render();
    },

  });


$(document).ready(function(){
  window.router = new AppRouter();
  Backbone.history.start();
  console.log('ready');
});

})();
