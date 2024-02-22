<template>
  <div class="field">
    <input class="field__input"
      :placeholder="placeholder"
      :selectabl="isSelect"
      :readonly="isSelect"
      @click="select"
      :disabled="isDisabled"
      v-model="inputValue"
    >
    <div class="field__options">
      <div v-show="isLoading" class="loading-icon"></div>
      <Arrow />
      <!-- @todo Добавлять новые опции поля -->
    </div>
    
  </div>
</template>

<script setup>
import Arrow from "@/shared/assets/icons/down-arrow.svg";

const $props = defineProps({
  isSelect: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  placeholder: String
});

const $emits = defineEmits(['input']);

const inputValue = defineModel()

</script>

<style>
.field {
  position: relative;
  max-width: 400px;
}

.field__input {
  display: block;
}

.field__options {
  position: absolute;
  right: 12px;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 5px;
}

.loading-icon {
  animation: 0.6s linear 0s infinite normal none running loading;
  
  block-size: 16px;
  inline-size: 16px;

  flex-shrink: 0;
  
  border-radius: 50%;
  border: 1.5px solid rgb(211, 218, 230);
  border-image: none;
  border-block-color: rgb(0, 119, 204) rgb(211, 218, 230);
  border-inline-color: rgb(211, 218, 230);
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>