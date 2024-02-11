<template>
<div class="not-found-page">
 <!-- <span>NOT FOUND</span>
 <button>dsdsdsds</button> -->
 <Filter />
 <Filter />
</div>
</template>

<script setup lang="ts">
import Filter from "@/entities/Filter.vue";
</script>

<style>
.not-found-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>