<template>
  <div
    class="field-search"
    tabindex="-1"
    ref="selectRef"
    @focusin="focusIn"
    @focusout="focusOut"
  >
    <input
      class="field-search__input"
      :placeholder="placeholder"
      selectable
      readonly
      :disabled="isDisabled"
      v-model="inputValue"
    >
    <div class="field-search__options">
      <div v-if="isLoading" class="loading-icon"></div>
      <SvgIcon
        v-else
        name="down-arrow"
        :size="20"
        color="grey"
      />
    </div>
    <div
      class="field-search__drop-down-modal"
      v-show="isOpenDropDown"
    >
      <input
        ref="dropDownSearchRef"
        class="field-search__search-input"
        :placeholder="searchPlaceholder"
      >
      <div class="field-search__options-content">
        <slot name="content" :search-value="searchValue"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

import SvgIcon from '@/shared/ui/icon/SvgIcon.vue';

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
const selectRef = ref(null);
const dropDownSearchRef = ref(null);

const focusIn = () => {
  isOpenDropDown.value = true;
};

const focusOut = (event) => {
  const isRelatedFocus = Object.is(event.relatedTarget, dropDownSearchRef.value);

  if (!isRelatedFocus) {
    isOpenDropDown.value = false;
  }
};

watch(inputValue, () => isOpenDropDown.value = false);
</script>

<style lang="scss">
@import "./styles";
</style>
