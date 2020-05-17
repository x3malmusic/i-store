<template>
  <div id="app">
    <app-header />
    <div class="content-wrapper">
      <component :is="sidebar" />
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header/Header";
import Categories from "./views/Categories/Categories";
import { mapActions, mapMutations } from "vuex";

export default {
  components: { AppHeader, Categories },
  computed: {
    sidebar() {
      if (this.$route.meta.sidebar) return "Categories";
    },
  },
  methods: {
    ...mapActions({ getProducts: "Product/getProducts" }),
    ...mapMutations({ recoverCart: "Cart/recoverCart" }),
  },
  async mounted() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      this.recoverCart(cart);
    }
    await this.getProducts();
  },
};
</script>
