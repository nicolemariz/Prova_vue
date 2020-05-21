import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";

import prodotti from "./pagine/prodotti";
import prodotto from "./pagine/prodotto";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/prodotti", component: prodotti },
    { path: "/prodotto/:id", component: prodotto },
    { path: "/", redirect: "/prodotti" }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
