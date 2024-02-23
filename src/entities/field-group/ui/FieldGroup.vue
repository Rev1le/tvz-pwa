<script setup>
import { ref } from 'vue';

const $props = defineProps({});

const groupName = ref('Поля заявки');

const isShowFields = ref(false);

</script>

<template>
<div class="field-group">
  <div class="field-group__header">
    <div class="group-icon">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 16 16"
      >
        <path id="shape0" transform="matrix(0.72 0 0 0.72 5.71764857681956e-15 3.5527136788005e-15)" fill="#2AC04B" stroke-opacity="0" stroke="#000000" stroke-width="0" stroke-linecap="square" stroke-linejoin="bevel" d="M8 16C3.5817 16 0 12.4183 0 8C0 3.5817 3.5817 0 8 0C12.4183 0 16 3.5817 16 8C16 12.4183 12.4183 16 8 16ZM8 1.3334C4.3182 1.3334 1.3334 4.3181 1.3334 8C1.3334 11.6819 4.3182 14.6667 8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.3334 8 1.3334ZM7.9466 10.8887C7.9229 10.9875 7.8721 11.0778 7.8 11.1494C7.674 11.2761 7.4978 11.3395 7.32 11.322C7.0344 11.342 6.7735 11.1602 6.6933 10.8854L4.8133 9.0067C4.6025 8.7693 4.6132 8.4088 4.8376 8.1843C5.0619 7.9598 5.4224 7.9488 5.6599 8.1594L7.1133 9.6154L10.0866 4.344C10.1729 4.1862 10.3192 4.0699 10.4925 4.0216C10.6657 3.9733 10.8511 3.997 11.0066 4.0874C11.3284 4.2859 11.4346 4.704 11.2466 5.032Z" sodipodi:nodetypes="ccccccccccccccccccccccccc"/>
      </svg>
    </div>
    <div class="group-name">Даты создания / закрытия</div>
    <div class="collapse-btn">
      <a @click="isShowFields = !isShowFields">
        Подробнее >
      </a>
    </div>
  </div> 
  <div class="field-group__fields" v-show="isShowFields">
    <slot name="fields"></slot>
  </div>
</div>
</template>

<style>
.field-group {
  padding: 5px;
}

.field-group__header {
  display: grid; 
  grid-template-columns: 20px 1.4fr; 
  grid-template-rows: 1.3fr 0.7fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "group-icon group-name"
    "group-icon collapse-btn"; 
}

.group-icon { grid-area: group-icon; padding: 4px; }
.group-name { grid-area: group-name; }
.collapse-btn { grid-area: collapse-btn; }

.field-group__group-name {
  font-size: 15px;
  font-weight: 500;
}

.field-group__fields {

}
</style>