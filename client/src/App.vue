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
      <cart v-if="showCartFlag" />
    </transition>
  </div>
</template>

<script>
import AppHeader from "./components/Header/Header";
import Cart from "./views/Cart/Cart";
import Categories from "./views/Categories/Categories";
import { mapState } from "vuex";

export default {
  components: { Cart, AppHeader, Categories },
  computed: {
    ...mapState({
      showCartFlag: (state) => state.Cart.showCartFlag,
    }),
    sidebar() {
      if (this.$route.meta.sidebar) return "Categories";
    },
  },
};
</script>
