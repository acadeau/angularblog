require('angular');
require('angular-ui-router');
require('restangular');

const _ = require('lodash');

angular.module('blog', ['ui.router', 'restangular']).constant('_', _)
  .config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider){
    RestangularProvider.setBaseUrl('http://jsonplaceholder.typicode.com/');
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'js/Home/home.html',
      controller: 'HomeController',
      resolve: {
        posts: function(PostsService){
          debugger;
          return PostsService.getPosts();
        }
      }
    })

  }]);

  require('./Home/HomeController');
  require('./Post/PostsService');
