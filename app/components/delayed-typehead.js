import Component from '@ember/component';
import { debounce } from '@ember/runloop';

export default Component.extend({
  actions: {
    handleTyping() {
      //the fetchResults function is passed into the component from its parent
      debounce(this, this.fetchResults, this.searchValue, 250);
    }
  }
});