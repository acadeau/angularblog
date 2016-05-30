require('angular');

angular.module('blog')
  .factory('PostsService', ['Restangular', '_', function(Restangular, _){
    let posts = Restangular.all('posts');

    return {
      getPosts: function(){
        return posts.getList();
      },
      newPosts: function(postData){
        return posts.post(postData);
      },
      getPost: function(id){
        return Restangular.one('posts', id);
      },
      updatePost: function(postData, id){
       return this.getPost(uid).get().then(room => {
         _.merge(room[0], roomData);
         room[0].put();
       })
      }
    }
}])
