<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img :src="product.image" alt="" />
    </div>
    <h3>{{ slicedProductName }}</h3>
    <div class="cart-item-total">
      <h3>[{{ product.quantity }}]</h3>
      x
      <h3>{{ product.price }}</h3>
      =
      <h3>{{ product.quantity * product.price }}</h3>
    </div>
    <app-button type="delete-btn" title="Delete" @click="deleteItem" />
  </div>
</template>

<script>
import AppButton from "../AppButton/AppButton";
import { mapMutations, mapState } from "vuex";

export default {
  name: "CartItem",
  components: {
    AppButton,
  },
  props: {
    product: Object,
  },
  computed: {
    ...mapState({ cart: (state) => state.Cart.cart }),

    slicedProductName() {
      if (this.product.name.length > 20) {
        return this.product.name.slice(0, 20) + "...";
      } else return this.product.name;
    },
  },
  methods: {
    ...mapMutations({ deleteFromCart: "Cart/deleteFromCart" }),

    deleteItem() {
      this.deleteFromCart(this.product);
      this.$_add_items(this.cart);
    },
  },
};
</script>

<style lang="scss">
@import "cart-item";
</style>
