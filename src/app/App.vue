<script lang="ts" setup>
import MobileLayout from '@/widgets/MobileLayout.vue';
import GlobalFilter from "@/entities/filters/GlobalFilter.vue";

const filters = [
  'storage',
  'orders'
];

</script>

<template>
  <mobile-layout>
    <template v-slot:filters>
      <global-filter :key="filter" v-for="filter in filters" />
    </template>
    <template v-slot:content>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </template>
  </mobile-layout>
</template>

<style>
@import './index.css';
</style>
