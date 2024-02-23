<script lang="ts" setup>
import MobileLayout from '@/widgets/MobileLayout.vue';
// import GlobalFilter from "@/entities/filters/GlobalFilter.vue";
// import { InputField } from "@/entities/field";
import { useAppStore } from './providers/store'
import { provide } from 'vue'

provide('appStore', useAppStore);


// const filters = [
//   'storage',
//   'orders'
// ];


const store = useAppStore()

window.addEventListener('offline', () => {
  console.log('Offline');
  store.$patch((state: { isOnlineMode: boolean; }) => {state.isOnlineMode = false});
});

window.addEventListener('online', () => {
  console.log('Online');
  store.$patch((state: { isOnlineMode: boolean; }) => {state.isOnlineMode = true});
});

</script>

<template>
  <mobile-layout>
    <!-- <template v-slot:filters>
      <InputField placeholder="Выберите площадку" :key="filter" v-for="filter in filters" />
    </template> -->
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
