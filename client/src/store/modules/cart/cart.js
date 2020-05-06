import cartMutations from "./mutations";

export default {
  namespaced: true,
  state: {
    cart: [],
    showCartFlag: false,
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
