'use strict'
const View = use('View')
class IsUserLoggedIn {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const user = yield request.auth.getUser();
    View.global('currentUser', user);
    yield next
  }

}

module.exports = IsUserLoggedIn
