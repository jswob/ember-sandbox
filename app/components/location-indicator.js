import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  locationService: service("location-service"),

  city: computed("locationService.currentLocation", function() {
      return this.locationService.getCurrentCity();
  }),

  country: computed("locationService.currentLocation", function() {
      return this.locationService.getCurrentCountry();
  })
});
