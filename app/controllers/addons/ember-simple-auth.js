import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      const { name, password } = this.getProperties("name", "password");
      this.get("session")
        .authenticate("authenticator:oauth2", name, password)
        .catch(reason => {
          this.set("errorMessage", reason.error || reason);
        });
    },
    invalidateSession() {
      this.get("session").invalidate();
    }
  }
});
