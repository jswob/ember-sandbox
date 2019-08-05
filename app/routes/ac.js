import Route from "@ember/routing/route";

export default Route.extend({
  activate() {
    this.logger.log("I am logger!");
  }
});
