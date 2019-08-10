import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";
import { getOwner } from "@ember/application";

export default Controller.extend({
  acShoppingCart: service(),
  acCart: service("ac-shopping-cart"),

  c: computed(function() {
    return getOwner(this).lookup("service:ac-shopping-cart");
  }),

  actions: {
    add(name) {
      this.c.add({
        name: name
      });
    },
    remove(item) {
      this.acCart.remove(item);
    }
  }
});
