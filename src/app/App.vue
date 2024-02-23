<script lang="ts" setup>
import MobileLayout from '@/widgets/MobileLayout.vue';
// import GlobalFilter from "@/entities/filters/GlobalFilter.vue";
import { InputField } from "@/entities/field";

const filters = [
  'storage',
  'orders'
];

</script>

<template>
  <mobile-layout>
    <template v-slot:filters>
      <InputField placeholder="Выберите площадку" :key="filter" v-for="filter in filters" />
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
