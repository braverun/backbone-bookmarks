(function(){
  'use strict';

  window.App = window.App || {};

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



  var TagsListView = Backbone.View.extend({
    template : _.template($('#tags-template').text()),

    render: function(){
      this.$el.html(this.template());
      return this;
    }
  });

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    initialize: function(){
      this.countView = new CountView({el: '.js-count'});
      this.bookmarksListView = new BookmarksListView({el: '.js-bookmarks-ul'});
      this.tagsListView = new TagsListView({el: '.js-tags'});
    },

    index: function(){
      this.countView.render();
      this.bookmarksListView.render();
      this.tagsListView.render();
    },

  });


$(document).ready(function(){
  window.router = new AppRouter();
  Backbone.history.start();
  console.log('ready');
});

})();
