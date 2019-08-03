import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, click, fillIn } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | comment-form", function(hooks) {
  setupRenderingTest(hooks);

  test("should trigger external action on form submit", async function(assert) {
    assert.expect(1);
    //test double for the external action
    this.set("externalAction", actual => {
      let expected = { comment: "You are not a wizard!" };
      assert.deepEqual(
        actual,
        expected,
        "submitted value is passed to external action"
      );
    });
    await render(hbs`<CommentForm @submitComment={{action externalAction}} />`);
    await fillIn("textarea", "You are not a wizard!");
    await click(".comment-input");
  });
});
