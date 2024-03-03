<template>
  <div class="select-field">
    <div class="field">
      <input
        class="field__input"
        :placeholder="placeholder"
        selectable
        readonly
        @click="isOpenDropDown = !isOpenDropDown"
        :disabled="isDisabled"
        v-model="inputValue">
      <!-- <div v-for="(value, key) in options">{{ value }}</div> -->
      <div class="field__options">
        <div v-show="isLoading" class="loading-icon"></div>
        <Arrow v-show="!isLoading" />
        <!-- @todo Добавлять новые опции поля -->
      </div>
    </div>
    <div
      v-show="isOpenDropDown"
      class="field-drop-down"
    >
      <input class="field-drop-down__search" :placeholder="searchPlaceholder">
      <div class="field-drop-down__content">
        <slot name="content" :search-value="searchValue"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Arrow from "@/shared/ui/assets/icons/down-arrow.svg";

const $props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  placeholder: String,
  searchPlaceholder: String
});

const $emits = defineEmits(['input']);

const inputValue = defineModel('inputValue');

const searchValue = ref(null);

const isOpenDropDown = ref(false);

function openList() {

}

</script>

<style lang="scss">

.select-field {
  position: relative;
}

.field-drop-down {
  position: absolute;
  max-width: 400px;
  top: 56px;
  /* width: 320px; */
  max-height: 355px;
  width: 100%;
  z-index: 1;

  border-radius: 4px;
  border: 1px solid rgb(217, 224, 245);
  background: white;
  box-shadow: 0px 4px 34px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
}

.field-drop-down__search {
  max-width: calc(100% - 32px);
  height: 46px;
  margin: 16px 16px 15px 16px;
}

.field-drop-down__content {
  flex-grow: 1;
  max-height: 200px;
  overflow-y: scroll;
  min-height: min-content;
  // padding-bottom: 16px;
  
  &:focus {
    outline: none;
  }
  
  &::-webkit-scrollbar {
    display: none;
  } 
  margin: 16px 0px;
}


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