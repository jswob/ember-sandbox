import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),

  actions: {
    createTestingModel() {
      const testingModel = this.getProperties("name", "description");
      return this.store.createRecord("testing-model", testingModel);
    }
  }
});
