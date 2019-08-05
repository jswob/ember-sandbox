import Route from "@ember/routing/route";

export default Route.extend({
  activate() {
    this.logger.log("I am logger!");
  },
  model() {
    console.log(this.cart);
    return this.cart;
  }
});
