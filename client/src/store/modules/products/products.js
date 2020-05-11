import productMutation from "./mutations";
import productActions from "./actions";
import { searchAndFilter } from "../../../helper/search";
import { categoryItemsCount } from "../../../helper/categoryItemsCount";

export default {
  namespaced: true,
  state: {
    categories: [],
    products: [],
    currentCategory: "All",
    searchQuery: "",
  },
  actions: {
    ...productActions,
  },
  mutations: {
    ...productMutation,
  },
  getters: {
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
};
