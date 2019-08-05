import { A } from "@ember/array";
import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("errors", A([]));
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.set("errors", A([]));
  },

  actions: {
    required(event) {
      if (!event.target.value) {
        this.errors.pushObject({ message: `${event.target.name} is required` });
      }
    }
  }
});
