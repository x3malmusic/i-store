<template>
  <div class="content">
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
            <app-button title="+" type="quantity-btn" @click="addQuantity" />
            <div class="quantity">{{ quantity }}</div>
            <app-button title="-" type="quantity-btn" @click="subQuantity" />
          </div>
        </div>
        <app-button
          title="+ Add To Cart"
          type="cart-btn"
          @click="addItemToCart"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "../../components/AppButton/AppButton";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ProductPage",
  components: {
    AppButton,
  },
  data: () => ({
    product: {},
    quantity: 0,
  }),
  computed: {
    ...mapState({
      products: (state) => state.Product.products,
      cart: (state) => state.Cart.cart,
    }),
  },
  methods: {
    ...mapMutations({ addToCart: "Cart/addToCart" }),
    addItemToCart() {
      if (this.quantity)
        this.addToCart({ ...this.product, quantity: this.quantity });
      this.$_add_items(this.cart);
    },
    addQuantity() {
      this.quantity += 1;
    },
    subQuantity() {
      if (this.quantity) this.quantity -= 1;
    },
  },
  async mounted() {
    await this.products.map((e) => {
      if (e.productId == this.$route.params.productId) this.product = e;
    });
  },
};
</script>

<style lang="scss">
@import "product-page";
</style>
