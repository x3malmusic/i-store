<template>
  <div class="cart-page">
    <div class="cart" v-if="cart.length">
      <cart-item
        v-for="product in cart"
        :product="product"
        :key="product.productId"
      />
      <div class="cart-page-total">
        <app-button
          title="Buy"
          type="cart-btn"
          key="cart-button"
          @click="buy"
        />
        <span>
          TOTAL:
          <h2>
            {{ total }}
          </h2>
        </span>
      </div>
    </div>
    <h2 class="cart-empty" v-else>Cart is empty</h2>
  </div>
</template>

<script>
import AppButton from "../../components/AppButton/AppButton";
import CartItem from "../../components/CartItem/CartItem";
import { mapState } from "vuex";

export default {
  name: "CartPage",
  components: { AppButton, CartItem },
  computed: {
    ...mapState({
      cart: (state) => state.Cart.cart,
    }),
    total() {
      return this.cart.reduce((total, e) => {
        total += e.price * e.quantity;
        return total;
      }, 0);
    },
  },
  methods: {
    buy() {
      console.log("buy");
    },
  },
};
</script>

<style lang="scss">
@import "cart-page";
</style>
