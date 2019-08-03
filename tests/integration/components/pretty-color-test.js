import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | pretty-color", function(hooks) {
  setupRenderingTest(hooks);

  test("should change colors", async function(assert) {
    assert.expect(2);

    // set the outer context to red
    this.set("colorValue", "red");

    await render(hbs`<PrettyColor @name={{this.colorValue}} />`);

    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "color: red",
      "starts as red"
    );

    this.set("colorValue", "blue");

    assert.equal(
      this.element.querySelector("div").getAttribute("style"),
      "color: blue",
      "updates to blue"
    );
  });

  test("It renders", async function(assert) {
    assert.expect(2);

    this.set("colorValue", "orange");

    await render(hbs`<PrettyColor @name={{this.colorValue}} />`);

    assert.equal(
      this.element.querySelector("div").textContent.trim(),
      "Pretty Color: orange",
      "text starts as orange"
    );

    this.set("colorValue", "green");

    assert.equal(
      this.element.querySelector("div").textContent.trim(),
      "Pretty Color: green",
      "text switches to green"
    );
  });
});
