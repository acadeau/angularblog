require('angular');

angular.module('blog')
  .controller('PostsDetailsController', ['post', '$scope', '$state', function(post, $scope, $state, $stateParams){
    $scope.post = post;

}]);
