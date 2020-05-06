import { defCategories, defProducts } from "../../mock";
import productMutation from "./mutations";
import { searchAndFilter } from "../../../helper/search";
import { categoryItemsCount } from "../../../helper/categoryItemsCount";

export default {
  namespaced: true,
  state: {
    categories: [...defCategories],
    products: [...defProducts],
    currentCategory: "All",
    searchQuery: "",
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
