import { A } from "@ember/array";
import Service from "@ember/service";

export default Service.extend({
  cart: "Hello from your cart",
  items: null,

  init() {
    this._super(...arguments);
    this.set("items", A([]));
  },

  add(item) {
    this.items.pushObject(item);
  },
  
  remove(item) {
    this.items.removeObject(item);
  },

  empty() {
    this.items.clear();
  }
});
