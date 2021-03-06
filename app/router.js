import EmberRouter from '@ember/routing/router';
import config from 'official-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', function () {});
  this.route('contact', { path: 'getting-in-touch' });
  this.route('http404', { path: '/*' });
  this.route('rentals', { path: 'rentals/:rental_id' });
});
