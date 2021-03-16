import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Buy from "../views/Buy.vue";
import Sell from "../views/Sell.vue";
import Saved from "../views/Saved.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup";
import Logout from "../views/Logout.vue";

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
