<script setup>
import { ref } from 'vue';

const $emits = defineEmits(['click']);

const $props = defineProps({
  isSelect: {default: false},
  value: Object
})

// const $props = defineProps(['value'])

// 👇 Emit the update to the parent
// const $emits = defineEmits(['update:value'])

// const isSelect = computed(() => {

// });

// const isSelect = defineModel('isSelect');

// function updateState() {
//   isSelect.value = !isSelect.value;
// }

</script>

<template>
  <div
    class="checkbox-list-value clickable"
    :class="isSelect ? 'selected' : ''"
    @click="$emits('click', $event)"
  >
  <svg
    class="checkbox-list-value__icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="radio">
      <rect x="0.5" y="0.5" width="23" height="23" rx="11.5" fill="white" />
      <circle
        v-show="isSelect"
        id="Ellipse 11"
        cx="12"
        cy="12"
        r="6"
        fill="#296CEE"
      />
      <rect
        x="0.5"
        y="0.5"
        width="23"
        height="23"
        rx="11.5"
        :stroke="isSelect ? '#296CEE' : '#D9E0F5'"
      />
    </g>
  </svg>
  {{ value.value }}
  </div>
</template>

<style lang="scss">
.checkbox-list-value {
  padding: 8px 16px;
  flex-grow: 1;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  display: flex;
  column-gap: 12px;
  align-items: center;

  &:hover {
    background-color: rgb(240, 242, 248);
  }
}

.selected {
  background-origin: padding-box;
  background-color: rgb(240, 242, 248);
}
</style>