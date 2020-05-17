import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("../views/Products/Products"),
      meta: { sidebar: true },
    },
    {
      path: "/products/:productId",
      name: "productPage",
      component: () => import("../views/ProductPage/ProductPage"),
      meta: { sidebar: true },
    },
    {
      path: "/cart",
      name: "cartPage",
      component: () => import("../views/CartPage/CartPage"),
      meta: { sidebar: false },
    },
  ],
});

export default router;
