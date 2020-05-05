import Vue from "vue";
import Vuex from "vuex";

import cartMutations from "./mutations/cart";
import productMutations from "./mutations/product";

import { defCategories, defProducts } from "./mock";
import { searchAndFilter } from "../helper/search";
import { categoryItemsCount } from "../helper/categoryItemsCount";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [...defCategories],
    products: [...defProducts],
    showCartFlag: false,
    cart: [],
    currentCategory: "All",
    searchQuery: "",
  },
  mutations: {
    ...cartMutations,
    ...productMutations,
  },
  actions: {},
  getters: {
    getCartItemsQuantity(state) {
      return state.cart.length;
    },

    getProducts(state) {
      return searchAndFilter(
        state.products,
        state.searchQuery,
        state.currentCategory
      );
    },

    getItemsCountInCategories(state) {
      return categoryItemsCount(state.products, state.categories);
    },
  },
});
