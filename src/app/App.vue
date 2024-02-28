<script lang="ts" setup>
import { MobileLayout } from '@/widgets/mobile-layout';
import { useAppStore } from './providers/store'
import { provide, onMounted } from 'vue'
import { axiosInstance } from '../shared/api';

provide('appStore', useAppStore);


// const filters = [
//   'storage',
//   'orders'
// ];

provide('axios', axiosInstance);

onMounted(() => {
  axiosInstance.get('/main/pwa/app-version/', {
  }).then((r: any) => console.log(r.data));
  
  axiosInstance.get('/main/pwa/service-order-list/', {
  }).then((r: any) => console.log(r.data));
});
// const store = useAppStore()

// window.addEventListener('offline', () => {
//   console.log('Offline');
//   store.$patch((state: { isOnlineMode: boolean; }) => {state.isOnlineMode = false});
// });

// window.addEventListener('online', () => {
//   console.log('Online');
//   store.$patch((state: { isOnlineMode: boolean; }) => {state.isOnlineMode = true});
// });

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
