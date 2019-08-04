import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  actions: {
    async createPost(name) {
      if (!name) return name;
      await this.store.createRecord("post", { name: name }).save();
      return this.set("name", null);
    }
  }
});
