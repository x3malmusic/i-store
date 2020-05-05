<template>
  <div class="product-page">
    <div class="product-page-img">
      <img :src="product.image" alt="image" class="product-img" />
    </div>
    <div class="product-page-description">
      <div>
        <h2>{{ product.name }}</h2>
        <h6>{{ product.description }}</h6>
        <h3>${{ product.price }}</h3>
      </div>
      <div class="product-page-quantity">
        <div>
          <app-button title="+" type="quantity-btn" :callback="addQuantity" />
          <div class="quantity">{{ quantity }}</div>
          <app-button title="-" type="quantity-btn" :callback="subQuantity" />
        </div>
      </div>
      <app-button
        title="+ Add To Cart"
        type="cart-btn"
        :callback="addItemToCart"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/AppButton/AppButton";
import { mapMutations } from "vuex";

export default {
  name: "ProductPage",
  components: {
    AppButton,
  },
  data: () => ({
    product: {},
    quantity: 0,
  }),
  methods: {
    ...mapMutations(["addToCart"]),
    addItemToCart() {
      if (this.quantity)
        this.addToCart({ ...this.product, quantity: this.quantity });
    },
    addQuantity() {
      this.quantity += 1;
    },
    subQuantity() {
      if (this.quantity) this.quantity -= 1;
    },
  },
  mounted() {
    this.product = this.$route.query.product;
  },
};
</script>

<style lang="scss">
@import "product-page";
</style>
