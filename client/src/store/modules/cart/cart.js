import cartMutations from "./mutations";

export default {
  namespaced: true,
  state: {
    cart: [],
  },

  mutations: {
    ...cartMutations,
  },

  getters: {
    getCartItemsQuantity(state) {
      return state.cart.length;
    },
  },
};
