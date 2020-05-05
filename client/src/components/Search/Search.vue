<template>
  <div class="search">
    <input
      type="text"
      class="search-input"
      @input="search"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
    />
    <a
      href="#"
      v-if="inputFocus"
      @click.prevent="resetSearch"
      class="search-input-close"
      >&times</a
    >
    <img src="../../assets/img/search.png" alt="search" class="search-img" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Search",
  data: () => ({
    inputFocus: false,
  }),
  methods: {
    ...mapMutations(["setSearchQuery"]),
    search(e) {
      this.setSearchQuery(e.target.value);
    },
    resetSearch() {
      this.setSearchQuery("");
    },
  },
};
</script>

<style lang="scss">
@import "./search.scss";
</style>
