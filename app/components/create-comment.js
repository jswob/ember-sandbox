import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  actions: {
    async createComment(name) {
      const post = this.post;
      if (!post || !name) return post;
      const comment = await this.store.createRecord("comment", {
        name: name,
        post: post
      }).save();
      return comment;
    }
  }
});
