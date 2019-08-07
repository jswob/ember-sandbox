import { module, test } from "qunit";
import { visit, fillIn, click, pauseTest } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | testing", function(hooks) {
  setupApplicationTest(hooks);

  test("should add new test-model", async function(assert) {
    await visit("/testing");
    await fillIn("input.name", "test-name");
    await fillIn("input.description", "test-description");
    await click("button");
    // await pauseTest(); // use resumeTest() in console to resume test
    assert.equal(
      this.element.querySelector("li:last-child").textContent.trim(),
      "test-name: test-description",
      "list is updated"
    );
  });
});
