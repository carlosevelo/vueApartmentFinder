import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import { getJwtToken } from "./auth";

const checkAuth = function(to, _, next) {
  const token = getJwtToken();
  if (token === undefined || token === "undefined" || token === null) {
    // redirect to login because we don't have token yet
    next({
      path: "/login",
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
};

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
