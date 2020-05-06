<template>
  <div class="product-card">
    <div class="product-card-img">
      <img :src="product.image" alt="image" class="product-img" />
    </div>
    <router-link :to="{ name: 'productPage', params: { productId: path } }">
      <h2>{{ product.name }}</h2>
    </router-link>
    <h6>{{ product.description }}</h6>
    <h3>${{ product.price }}</h3>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
  computed: {
    path() {
      return this.product.productId.toString();
    },
  },
};
</script>

<style lang="scss">
@import "product-card";
</style>
