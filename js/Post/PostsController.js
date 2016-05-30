require('angular');

angular.module('blog')
  .controller('PostsController', ['posts', '$scope', '$state', function(posts, $scope, $state, $stateParams){
    $scope.posts = posts;
    $scope.goToPostDetails = function(id){
      $state.go('posts.details', {postId: id});
    }
}]);
