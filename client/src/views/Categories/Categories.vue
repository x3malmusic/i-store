<template>
  <div class="categories">
    <category
      v-for="category in categories"
      :category="category"
      :key="category.name"
      :active="activeCategory === category.name"
      @set-active="setActiveCategory(category.name)"
    />
  </div>
</template>

<script>
import Category from "../../components/Category/Category";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Categories",
  data: () => ({
    activeCategory: "All",
  }),
  components: { Category },
  computed: {
    ...mapState(["categories"]),
    ...mapGetters(["getItemsCountInCategories"]),
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category;
    },
  },
};
</script>

<style lang="scss">
@import "./categories.scss";
</style>
