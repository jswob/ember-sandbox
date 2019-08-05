export function initialize(application) {
  application.inject('route:ac', 'cart', 'service:ac-shopping-cart');
}

export default {
  initialize
};
