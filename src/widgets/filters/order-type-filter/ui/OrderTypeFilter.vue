<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import { SelectField } from "@/shared/ui/field";
import { useFilterStore } from "@/entities/filters";
import CheckboxListValue from "@/shared/ui/list/CheckboxListValue.vue";

const filterStore = useFilterStore();
const { filters } = storeToRefs(filterStore);

const selectedId = ref(null);

watch(selectedId, (newSelectedId) => {
  filterStore.setFilterValue('type', Number(newSelectedId));
})

</script>

<template>
  <h4>{{ filters?.type?.title }}</h4>
  <SelectField :inputValue="filters?.type?.available[selectedId]">
    <template v-slot:content>
      <CheckboxListValue
        :value="{id: itemKey, value}"
        :isSelect="selectedId === itemKey"
        @click="selectedId = itemKey"
        v-for="(value, itemKey) in filters?.type?.available ?? []"
      />
    </template>
  </SelectField>
</template>
