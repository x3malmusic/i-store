export default {
  changeCurrentCategory(state, category) {
    state.currentCategory = category;
  },

  setSearchQuery(state, query) {
    state.searchQuery = query;
  },

  setProducts(state, products) {
    state.products = products
  },

  setCategories(state, categories) {
    state.categories = categories
  }
};
