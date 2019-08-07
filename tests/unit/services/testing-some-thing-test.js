import { module, test, skip } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | testing-some-thing", function(hooks) {
  setupTest(hooks);

  test("should correctly concat foo", function(assert) {
    const testingSomeThing = this.owner.lookup("service:testing-some-thing");
    testingSomeThing.set("foo", "baz");
    assert.equal(testingSomeThing.get("computedFoo"), "computed baz");
  });

  test("should update foo on testMethod", function(assert) {
    const testingSomeThing = this.owner.lookup("service:testing-some-thing");

    testingSomeThing.testMethod();

    assert.equal(testingSomeThing.get("foo"), "baz");
  });

  test("should return incremented count on calc", function(assert) {
    const testingSomeThing = this.owner.lookup("service:testing-some-thing");

    assert.equal(testingSomeThing.calc(), "count 1");
    assert.equal(testingSomeThing.calc(), "count 2");
  });

  test("should set other prop to yes when foo changes", function(assert) {
    const testingSomeThing = this.owner.lookup("service:testing-some-thing");

    testingSomeThing.set("foo", "smth");

    assert.equal(testingSomeThing.get("other"), "yes");
  });

  skip("skip this test", function(assert) {
    assert.ok(true);
  });
});
