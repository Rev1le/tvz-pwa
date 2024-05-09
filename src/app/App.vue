<script lang="ts" setup>
import { inject } from 'vue'
import { MobileLayout } from '@/widgets/mobile-layout';

const useAppStore: any = inject("appStore");
const appStore = useAppStore();

Promise.all([
  appStore.initAppData(),
  appStore.initAuthUser()
])
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
