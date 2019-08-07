import Service from "@ember/service";
import { computed, observer } from "@ember/object";

export default Service.extend({
  foo: "baz",
  other: "no",
  count: 0,

  computedFoo: computed("foo", function() {
    return `computed ${this.foo}`;
  }),
  doSomething: observer("foo", function() {
      this.set("other", "yes");
  }),

  testMethod() {
    this.set("foo", "baz");
  },
  calc() {
    this.incrementProperty("count");
    return `count ${this.count}`;
  }
});
