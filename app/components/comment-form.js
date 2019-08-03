import Component from "@ember/component";

export default Component.extend({
  comment: "",

  actions: {
    submitComment() {
      this.submitComment({ comment: this.comment });
    }
  }
});
