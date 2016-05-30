require('angular');
require('angular-ui-router');
require('restangular');

const _ = require('lodash');

angular.module('blog', ['ui.router', 'restangular']).constant('_', _)
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',  function($stateProvider, $urlRouterProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com/');
    $urlRouterProvider.otherwise('/posts');
    $stateProvider.state('posts', {
      url: '/posts',
      templateUrl: 'js/Post/posts.html',
      controller: 'PostsController',
      resolve: {
        posts: function(PostsService){
          return PostsService.getPosts();
        }
      }
    }).state('posts.details',{
      url: '/:postId',
      views:{
        '@':{
          //Have to search if it's possible to overwrite resolve data
          controller: 'PostsDetailsController',
          templateUrl: 'js/Post/posts.details.html',
          resolve: {
            post: function(PostsService, $stateParams){
              return PostsService.getPost($stateParams.postId).get();
            }
          }
        },
        'comments@posts.details':{
          controller: 'CommentsController',
          templateUrl: 'js/Comment/comments.html',
          resolve: {
            comments: function(CommentsService, $stateParams){
              return CommentsService.getComments($stateParams.postId);
            }
          }
        }
      }

    });

  }]);

  require('./Comment/CommentsController');
  require('./Comment/CommentsService');
  require('./Post/PostsService');
  require('./Post/PostsDetailsController');
  require('./Post/PostsController');
