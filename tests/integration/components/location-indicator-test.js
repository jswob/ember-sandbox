import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";
import Service from "@ember/service";

//Stub location service
const locationStub = Service.extend({
  city: "New York",
  country: "USA",
  currentLocation: {
    x: 1234,
    y: 7890
  },

  getCurrentCity() {
    return this.city;
  },
  getCurrentCountry() {
    return this.country;
  }
});

module("Integration | Component | location-indicator", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function(assert) {
    this.owner.register("service:location-service", locationStub);
  });

  test("should reveal current location", async function(assert) {
    await render(hbs`<LocationIndicator />`);
    assert.equal(this.element.textContent.trim(),
    "You currently are located in New York, USA");
  })

  test("should change displayed location when current location changes", async function(assert) {
    await render(hbs`<LocationIndicator />`);

    assert.equal(this.element.textContent.trim(),
    "You currently are located in New York, USA", "origin location should display")

    this.locationService = this.owner.lookup("service:location-service");
    this.set("locationService.city", "Beijing");
    this.set("locationService.country", "China");
    this.set("locationService.currentLocation", {x: 11111, y: 22222});

    assert.equal(this.element.textContent.trim(),
    "You currently are located in Beijing, China", "location display should change")
  })
});
