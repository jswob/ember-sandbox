import Component from "@ember/component";

export default Component.extend({
  tagName: "span",
  classNames: ["components-markdown-style"],
  classNameBindings: ["bodyStyle"],
});
