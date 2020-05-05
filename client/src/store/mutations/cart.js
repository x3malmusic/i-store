export default {
  showCart(state, show) {
    state.showCartFlag = show;
  },

  addToCart(state, item) {
    const found = state.cart.findIndex((e) => e.productId === item.productId);
    if (found != -1) {
      state.cart[found].quantity += item.quantity;
    } else state.cart.push(item);
  },

  deleteFromCart(state, item) {
    state.cart = state.cart.filter((e) => e.productId != item.productId);
  },
};
