require('angular');

angular.module('blog')
  .controller('HomeController', ['posts', '$scope', function(posts, $scope){
    debugger;
    $scope.posts = posts;
}]);
