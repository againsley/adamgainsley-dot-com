'use strict';

angular.module('myApp.blog', ['ngRoute', 'ngSanitize', 'textAngular'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/blog/blog.html'
  });
}])

.controller('blogCtrl', ['$http', function($http) {
  var blog = this;

  blog.title = "Chronicles of an Adventure Geek";
  blog.display = "list"; //"list", "post", or "new"
  blog.selected_post_id = 0;
  blog.new_post = {};
  get_blog_post();

  function get_blog_post() {
    var posts = {};

    // for now store posts in local json.
    // TODO: Move this out to some real storage
    $http({
      method:"GET",
      url:"pages/blog/posts.json"
    }).
    then(function(response) {
      console.log()
      blog.posts = response.data;
    });
  }

  blog.display_selected_post = function(post_id) {
    var selected_post = _.find(blog.posts, function(post) { return (post.id == post_id); });
    this.set_tab('post');
    blog.selected_post = selected_post;
  };

  blog.set_tab = function(tab) {
    blog.display = tab;
  }

  blog.save_post = function(post_id = 0) {
    if (post_id === 0) {
      console.log(blog.new_post);

      if (!blog.new_post.title) {
        alert('Gimme a title foo');
      }
    }
  }

}])

.directive('gsBlogPost', function() {
  return {
    templateUrl:"pages/blog/blogPostTemplate.html"
  }
})

.directive('gsBlogPostList', function() {
  return {
    templateUrl:"pages/blog/blogPostListTemplate.html"
  }
})

.directive('gsBlogPostForm', function() {
  return {
    templateUrl:"pages/blog/blogPostFormTemplate.html"
  }
})

