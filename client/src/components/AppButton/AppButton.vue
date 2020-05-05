<template>
  <a href="#" @click.prevent="method" :class="`button ${type}`">
    <div class="button-wrapper">
      <img :src="getImg" alt="img" v-if="img" />
      {{ title }}
    </div>
  </a>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    type: String,
    callback: Function,
    title: String,
    img: String,
  },
  computed: {
    getImg() {
      if (this.img) {
        return require(`../../assets/img/${this.img}`);
      }
    },
  },
  methods: {
    method() {
      if (this.callback) {
        this.callback();
      }
    },
  },
};
</script>

<style lang="scss">
@import "./button.scss";
</style>
