<template>
  <div class="form-input">
    <span
      :class="inputFocus || input ? 'form-input-txt show' : 'form-input-txt'"
      >{{ placeholder }}</span
    >
    <input
      :type="type || 'text'"
      class="form-input-control"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      v-model="input"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    placeholder: String,
    type: String,
  },
  data: () => ({
    inputFocus: false,
    input: "",
  }),
};
</script>

<style lang="scss">
@import "form-input";
</style>
