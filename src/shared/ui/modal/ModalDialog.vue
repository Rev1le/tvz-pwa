<script setup>
import { ref, watch } from 'vue';

const modalDialog = ref(null);
const model = defineModel()

watch(
  model,
  (newValue) => newValue
    ? modalDialog.value.showModal()
    : modalDialog.value.close()
);
</script>

<template>
  <dialog ref="modalDialog" class="modal">
    <button @click="model = false" class="modal__close-btn">
      X
    </button>
    <div class="modal__content">
      <slot></slot>
    </div>
  </dialog>
</template>

<style lang="scss">

$button-side-size: 2rem;
$content-padding: 8px;


.modal {
  border-width: 0;
  background-color: white;
  padding: $content-padding;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;

  margin: auto;
  height: 85vh;
  width: 80vh;
}

.modal:focus-visible {
  outline: none;
}

.modal__close-btn {
  width: $button-side-size;
  height: $button-side-size;

  position: absolute;
  right: 8px;

  border: none;

  background-color: white;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  color: var(--theme-primary);
  font-weight: 600;
  font-size: 20px;
}

.modal__content {
  margin-top: calc($button-side-size + $content-padding);
}
</style>
