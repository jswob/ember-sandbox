import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, settled } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | delayed-typehead", function(hooks) {
  setupRenderingTest(hooks);

  const stubResults = [{ name: "result 1" }, { name: "result 2" }];

  test("should render results after typing a term", async function(assert) {
    assert.expect(2);

    this.set("results", []);
    this.set("fetchResults", value => {
      assert.equal(
        value,
        "test",
        "fetch closure action called with search value"
      );
      this.set("results", stubResults);
    });

    await render(
      hbs`<DelayedTypehead @fetchResults={{this.fetchResults}} @results={{this.results}} />`
    );
    this.element.querySelector("input").value = "test";
    this.element.querySelector("input").dispatchEvent(new Event("keyup"));

    await settled();

    assert.equal(
      this.element.querySelectorAll(".result").length,
      2,
      "two results rendered"
    );
  });
});
