import Component from "@ember/component";
import { storageFor } from "ember-local-storage";
export default Component.extend({
  stats: storageFor("stats"),

  actions: {
    countUp() {
      this.incrementProperty("stats.counter");
    },
    resetCounter() {
      this.get("stats").clear();
    }
  }
});
