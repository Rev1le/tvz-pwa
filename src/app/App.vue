<script lang="ts" setup>
import {catchResponse} from "@/shared/lib/logger";
import { MobileLayout } from '@/widgets/mobile-layout';

import { provide, onMounted, inject, watch } from 'vue'
import { axiosInstance } from '../shared/api';

onMounted(() => {
  axiosInstance.get('/main/pwa/app-version/', {})
    .then((r: any) => console.log(r.data))
    .catch(catchResponse);
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
