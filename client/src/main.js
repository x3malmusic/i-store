import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { toLocalStorage } from "./mixins/handleLocalStorage";

Vue.config.productionTip = false;

Vue.mixin(toLocalStorage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
