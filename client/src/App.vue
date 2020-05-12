<template>
  <div id="app">
    <app-header />
    <div class="content-wrapper">
      <component :is="sidebar" />
      <div class="content">
        <router-view />
      </div>
    </div>
    <transition name="fade">
      <cart-modal v-if="showCartFlag" />
    </transition>
  </div>
</template>

<script>
import AppHeader from "./components/Header/Header";
import CartModal from "./views/CartModal/CartModal";
import Categories from "./views/Categories/Categories";
import { mapState, mapActions } from "vuex";

export default {
  components: { CartModal, AppHeader, Categories },
  computed: {
    ...mapState({
      showCartFlag: (state) => state.Cart.showCartFlag,
    }),
    sidebar() {
      if (this.$route.meta.sidebar) return "Categories";
    },
  },
  methods: {
    ...mapActions({ getProducts: "Product/getProducts" }),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
