<template>
  <button :disabled="props.disabled">
      <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: Boolean
})

</script>

<style>
button {
  background-color: white;
  /* background-color: #296CEE; */
  border: 1px solid #296CEE;

  padding: 10px 20px;

}

button[disabled] {
  background-color: #F0F2F8;
  border-width: 0px;
  color: #A1A5BD
}

</style>