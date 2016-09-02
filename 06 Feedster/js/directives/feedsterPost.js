app.directive('feedsterPost' , function (){
  return{
    restrict: 'E',
    scope: {
      post: '=info'
    },
    template: `
    <img class="avatar" src="{{post.author.avatar}}" >
    <h3 class="author-name">{{post.author.name}} </h3>
    <p class="comment-text">{{post.comment.text}} </p>
    <img class="comment-img" src="{{post.comment.img}}" >
    `
  }
})
console.log('hello');
