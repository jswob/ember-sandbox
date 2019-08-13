import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, pauseTest } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import makeWineObjects from "./../../helpers/make-wine-objects";

module("Integration | Component | testing-wine-stock", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders empty", async function(assert) {
    assert.expect(1);
    await render(hbs`<TestingWineStock />`);

    assert.equal(
      this.element.querySelector("h1").textContent.trim(),
      "Wine Stock"
    );
  });

  test("it renders wines in dropdown and list", async function(assert) {
    assert.expect(5);

    const model = makeWineObjects(12);

    this.set("model", model);
    this.render(hbs`<TestingWineStock @wines={{model}} />`);

    // check wines are included in dropdown

    const $dropdown = this.$(".dropdown");

    assert.equal($dropdown.find("option:eq(0)").text(), model[0].toString());
    assert.equal($dropdown.find("option:eq(1)").text(), model[1].toString());

    // check all wines are listed

    const $list = this.$(".wines");

    assert.equal($list.find(".wine:eq(0)").text(), model[0].toString());
    assert.equal($list.find(".wine:eq(8)").text(), model[8].toString());
    assert.ok($list.find(".wine").length);
  });
});
