<script setup>
// @todo валидацию сюда же
const $props = defineProps({
  label: {
    type: String,
  }
});
</script>

<template>
  <div class="form-field">
    <h4 class="form-field__label">{{ label }}</h4>
    <slot></slot>
  </div>
</template>

<style>
/*
.form-field {
  padding: 4px 0px;
}
.form-field__label {
  margin-bottom: 4px;
}
*/
</style>