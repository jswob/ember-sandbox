import Component from "@ember/component";
import { storageFor } from "ember-local-storage";
import { computed } from "@ember/object";

export default Component.extend({
  anonymousLikes: storageFor("anonymous-likes"),

  isLiked: computed("anonymousLikes.[]", function() {
    return this.get("anonymousLikes").includes(this.get("userId"));
  }),

  actions: {
    like(userId) {
      this.get("anonymousLikes").addObject(userId);
    }
  }
});
