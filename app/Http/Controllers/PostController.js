'use strict';

const Post = use('App/Model/Post');

class PostController {

  * index(request, response) {
    const posts = yield Post.with('user').fetch();
    yield response.sendView('post.index', { posts: posts.toJSON() });
  }

  * create(request, response) {
    yield response.sendView('post.create');
  }

  * store(request, response) {
    const { title, post } = request.all();


    // yield request.authUser.posts().create({ title, post, user_id });

    // yield Post.create({ title, post, user_id });
    yield request.authUser.posts()
    .create({ title, post });

    yield request.with({ success: 'New post is now listed!' }).flash();

    response.redirect('/posts');
  }


  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController;
