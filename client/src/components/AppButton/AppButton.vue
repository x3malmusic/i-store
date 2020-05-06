<template>
  <a
    @click.prevent="$emit('click', $event.target.value)"
    :class="`button ${type}`"
  >
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
};
</script>

<style lang="scss">
@import "./button.scss";
</style>
