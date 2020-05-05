<template>
  <div :class="`category ${chosen}`" @click="changeCategory">
    <p>{{ category.name }}</p>
    <p class="category-count">{{ category.count }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Category",
  props: {
    category: Object,
    active: Boolean,
  },
  computed: {
    chosen() {
      if (this.active) return "category-chosen";
      return "";
    },
  },
  methods: {
    ...mapMutations(["changeCurrentCategory"]),
    changeCategory() {
      this.$emit("set-active");
      this.changeCurrentCategory(this.category.name);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
@import "./category.scss";
</style>
