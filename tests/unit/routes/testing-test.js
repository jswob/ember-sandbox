import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

let originalAlert;

module("Unit | Route | testing", function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function(assert) {
    originalAlert = window.alert;
  });

  hooks.beforeEach(function(assert) {
    window.alert = originalAlert;
  });

  test("should display an alert", function(assert) {
    assert.expect(2);

    // get the route instance
    let route = this.owner.lookup("route:testing");

    // stub window.alert to perform a qunit test
    const expectedTextFoo = "foo";
    window.alert = text => {
      assert.equal(
        text,
        expectedTextFoo,
        `expect alert to display ${expectedTextFoo}`
      );
    };

    // call the _displayAlert function which triggers the qunit test above
    route._displayAlert(expectedTextFoo);

    // set up a second stub to perform a test with the actual action
    const expectedTextBar = "bar";
    window.alert = text => {
      assert.equal(
        text,
        expectedTextBar,
        `expected alert to display ${expectedTextBar}`
      );
    };

    // Now use the routes send method to test the actual action
    route.send("displayAlert", expectedTextBar);
  });
});
