<template>
  <div class="filter">
    <span class="filter__placeholder">
      Выберите площадку
    </span>
    <Arrow />
    <!-- <img class="filter__down-arrow" src="@/shared/assets/icons/down-arrow.svg?url" /> -->
  </div>
</template>

<script setup>
import Arrow from "@/shared/ui/assets/icons/down-arrow.svg";
import { ref } from 'vue';

</script>

<style>
.filter {
  /* max-width: 320px; */

  height: 46px;
  padding: 6px 12px;

  display: flex;
  align-items: center;

  border: 1px solid #D9E0F5;

  background-color: #FFFFFF;
}

.filter__placeholder {
  color: #A1A5BD;
  font-weight: 500;
  flex: 1;
}

/* old
.filter__down-arrow {
  align-self: center;
  padding-top: 5px;
} */
</style>