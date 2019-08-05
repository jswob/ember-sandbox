import EmberObject from "@ember/object";

export function initialize(application) {
  let Logger = EmberObject.extend({
    log(m) {
      console.log(m);
    }
  });

  application.register("logger:main", Logger);
}

export default {
  name: "logger",
  initialize
};
