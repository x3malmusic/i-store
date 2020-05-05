<template>
  <transition>
    <div class="cart">
      <div v-if="cart.length">
        <transition-group name="cart-items" tag="div">
          <cart-item
            v-for="product in cart"
            :product="product"
            :key="product.productId"
          />
          <app-button title="Buy" type="cart-btn" key="cart-button" />
        </transition-group>
      </div>
      <h2 class="cart-empty" v-else>Cart is empty</h2>
    </div>
  </transition>
</template>

<script>
import CartItem from "../../components/CartItem/CartItem";
import AppButton from "../../components/AppButton/AppButton";
import { mapState } from "vuex";

export default {
  name: "Cart",
  props: {
    product: Object,
  },
  components: {
    CartItem,
    AppButton,
  },
  computed: {
    ...mapState(["cart"]),
  },
};
</script>

<style lang="scss" scoped>
@import "cart";
</style>
