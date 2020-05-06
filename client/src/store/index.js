import Vue from "vue";
import Vuex from "vuex";

import Cart from "./modules/cart/cart";
import Product from "./modules/products/products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cart,
    Product,
  },
});
