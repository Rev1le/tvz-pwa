<script lang="ts" setup>
import MobileLayout from '@/pages/MobileLayout.vue';
</script>

<template>
  <mobile-layout>
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
