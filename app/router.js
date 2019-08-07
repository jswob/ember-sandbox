import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("addons", function() {
    this.route("ember-local-storage", function() {
      this.route("comment", { path: "/:post_id" });
    });
  });
  this.route('testing');
  this.route("components");
  this.route("ac");
  this.route("routes", function() {
    this.route("new");
    this.route("dynamic", { path: "/:dynamic_id" });
  });
  this.route("not-found", { path: "/*path" });
});

export default Router;
