require('angular');

angular.module('blog')
  .controller('CommentsController', ['comments', 'Restangular', '$scope', function(comments, Restangular, $scope){
    $scope.comments = comments;
}]);
