export const toLocalStorage = {
  methods: {
    $_add_items(items) {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(items));
    },
  },
};
