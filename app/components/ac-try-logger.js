import Component from "@ember/component";
import { computed } from "@ember/object";
import { getOwner } from "@ember/application";

export default Component.extend({
  logger: computed("logger", function() {
    return getOwner(this).lookup("logger:main");
  }),

  actions: {
    showLoggerMessage() {
      this.logger.log("This is message from logger");
    }
  }
});
