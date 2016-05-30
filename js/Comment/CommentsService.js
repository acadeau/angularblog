require('angular');

angular.module('blog')
  .factory('CommentsService', ['PostsService', '_', function(PostsService, _){

    return {
      getComments: function(postId){
        return PostsService.getPost(postId).getList('comments');
      }
    }
}])
