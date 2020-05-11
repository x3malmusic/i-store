<template>
  <header>
    <nav>
      <div class="header-left-part">
        <logo />
        <search />
      </div>
      <app-button
        img="shopping_cart.svg"
        title="CART"
        type="cart-btn"
        @click="changeCartFlag"
      />
      <transition name="appear">
        <span class="cart-item-quantity" v-if="getCartItemsQuantity">{{
          getCartItemsQuantity
        }}</span>
      </transition>
    </nav>
  </header>
</template>

<script>
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import AppButton from "../AppButton/AppButton";
import { mapGetters, mapState, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { Logo, Search, AppButton },
  methods: {
    ...mapMutations({ showCart: "Cart/showCart" }),
    changeCartFlag() {
      this.showCart(!this.showCartFlag);
    },
  },
  computed: {
    ...mapGetters({ getCartItemsQuantity: "Cart/getCartItemsQuantity" }),
    ...mapState({
      showCartFlag: (state) => state.Cart.showCartFlag,
    }),
  },
};
</script>

<style lang="scss">
@import "./header.scss";
</style>
