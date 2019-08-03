import Component from "@ember/component";

export default Component.extend({
    title: "Hello World!",
    
    actions: {
        updateTitle(){
            this.set("title", "This is Magic");
        }
    }
});
