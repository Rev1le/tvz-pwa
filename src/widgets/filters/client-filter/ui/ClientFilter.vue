<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { SelectField } from "@/shared/ui/field";
import { useFilterStore } from "@/entities/filters";
import CheckboxListValue from "@/shared/ui/list/CheckboxListValue.vue";

const filterStore = useFilterStore();
const { filters, values } = storeToRefs(filterStore);

const selectedId = ref(null);

watch(
  selectedId,
  (newSelectedId) => filterStore.setFilterValue('client', Number(newSelectedId))
);
</script>

<template>
  <h4>{{ filters?.client?.title }}</h4>
  <SelectField :inputValue="{1: 'Client1', 2: 'Client2'}[values.client]">
    <template v-slot:content>
      <CheckboxListValue
        :value="{id: itemKey, value}"
        :isSelect="selectedId === itemKey"
        @click="selectedId = itemKey"
        v-for="(value, itemKey) in filters?.client?.available ?? {1: 'Client1', 2: 'Client2'}"
      />
    </template>
  </SelectField>
</template>
