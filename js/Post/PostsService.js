require('angular');

angular.module('blog')
  .factory('PostsService', ['Restangular', '_', function(Restangular, _){
    let posts = Restangular.all('posts');

    return {
      getPosts: function(){
        return posts.getList();
      },
      newPosts: function(roomData, files){
        file = files[0]
        return rooms.post(roomData);
      },
      getPost: function(uid){
        return Restangular.one('post', uid).get();
      },
      updatePost: function(roomData, uid){
       return this.getRoom(uid).then(room => {
         _.merge(room[0], roomData);
         room[0].put();
       })
      }
    }
}])
