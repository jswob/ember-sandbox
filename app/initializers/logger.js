import EmberObject from "@ember/object";

export function initialize(application) {
  let Logger = EmberObject.extend({
    log(m) {
      console.log(m);
    }
  });

  // Register logger factory
  application.register("logger:main", Logger);
  // Inject logger factory only in "ac" route
  application.inject("route:ac", "logger", "logger:main")
}

export default {
  name: "logger",
  initialize
};
