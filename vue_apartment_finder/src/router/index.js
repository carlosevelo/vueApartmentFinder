import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Buy from "../views/Buy.vue";
import Sell from "../views/Sell.vue";
import Saved from "../views/Saved.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/buy",
    name: "Buy",
    component: Buy
  },
  {
    path: "/sell",
    name: "Sell",
    component: Sell
  },
  {
    path: "/saved",
    name: "Saved",
    component: Saved
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
