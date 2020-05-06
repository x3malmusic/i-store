<template>
  <div class="cart-item">
    <div class="cart-item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="cart-item-text">
      <h4>{{ slicedProductName }}</h4>
      <h2>[{{ product.quantity }}]</h2>
    </div>
    <app-button type="delete-btn" title="Delete" @click="deleteItem" />
  </div>
</template>

<script>
import AppButton from "../AppButton/AppButton";
import { mapMutations } from "vuex";

export default {
  name: "CartItem",
  components: {
    AppButton,
  },
  props: {
    product: Object,
  },
  computed: {
    slicedProductName() {
      if (this.product.name.length > 14) {
        return this.product.name.slice(0, 14) + "...";
      } else return this.product.name;
    },
  },
  methods: {
    ...mapMutations({ deleteFromCart: "Cart/deleteFromCart" }),
    deleteItem() {
      this.deleteFromCart(this.product);
    },
  },
};
</script>

<style lang="scss">
@import "cart-item";
</style>
