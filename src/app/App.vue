<script lang="ts" setup>
import { MobileLayout } from '@/widgets/mobile-layout';
import { useAppStore } from './providers/store'
import { provide, onMounted } from 'vue'
import { axiosInstance } from '../shared/api';
import { dbPromise } from './providers/db';

provide('appStore', useAppStore);
provide('axios', axiosInstance);
provide('dbPromise', dbPromise);

onMounted(() => {
  axiosInstance.get('/main/pwa/app-version/', {
  }).then((r: any) => console.log(r.data));
});

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
