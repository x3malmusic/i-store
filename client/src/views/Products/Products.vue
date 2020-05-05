<template>
  <div class="products">
    <h2 v-if="!getProducts.length">There are no products in this category</h2>
    <div v-else class="products-card" v-for="product in getProducts">
      <product-card :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/ProductCard/ProductCard";
import { mapGetters } from "vuex";

export default {
  name: "Products",
  components: { ProductCard },
  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>

<style lang="scss">
@import "products";
</style>
