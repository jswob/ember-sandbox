import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  attributeBindings: ["style"],

  style: computed("name", function() {
    return `color: ${this.name}`;
  })
});
