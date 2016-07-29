'use strict';

const Post = use('App/Model/Post');

class PostController {

  * index(request, response) {
    const post = yield Post.with('user').fetch();

    yield response.sendView('post.index');
  }

  * create(request, response) {
    yield response.sendView('post.create');
  }

  * store(request, response) {
    const {title, post } = request.all();

    yield request.authUser.posts().create({title, post });

    yield request.with({ success: 'New post listed!' }).flash();

    response.redirect('/posts');
  }

}

module.exports = PostController;
