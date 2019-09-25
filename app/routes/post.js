import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      posts: this.store.findAll('post'),
      users: this.store.findAll('user')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'posts', model.posts);
    set(controller, 'users', model.users);
  }
});
