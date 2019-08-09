import Component from "@ember/component";

export default Component.extend({
  tagName: "nav",
  classNames: ["primary"],
  classNameBindings: ["isUrgent", "isBlue:blue", "isEnabled::disabled", "priority"],
  isUrgent: true,
  isBlue: true,
  isEnabled: false,
  priority: "highestPriority",
  attributeBindings: ['href', "customStyle:style", "title"],
  href: "http://localhost:4200",
  customStyle: "display: block;",
  title: null
});
