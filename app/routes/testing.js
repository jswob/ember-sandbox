import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    displayAlert(text) {
      this._displayAlert(text);
    }
  },

  _displayAlert(text) {
    alert(text);
  },
  model() {
    return this.store.peekAll("testing-model");
  }
});