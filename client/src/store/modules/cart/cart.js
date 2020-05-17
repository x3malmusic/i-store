import cartMutations from "./mutations";
import cartActions from "./actions";

export default {
  namespaced: true,
  state: {
    cart: [],
  },

  mutations: {
    ...cartMutations,
  },

  actions: {
    ...cartActions,
  },

  getters: {
    getCartItemsQuantity(state) {
      return state.cart.length;
    },
  },
};
