<script setup>
import { ref } from 'vue';

import { FormField, InputField } from "@/shared/ui/field";

const $props = defineProps({
  fault: {
    default: () => ({})
  }
})

const terminalIdTest = ref('4324242278');

const serialNumberTest = ref('gerwgwerghehe');
</script>

<template>
  <div class="fault-card">
    <div class="fault-card__header">
      <div class="fault-card__index">1</div>
      <a class="fault-card__name">{{fault.name ?? 'Test'}}</a>
    </div>
    <div class="fault-card__content">
      <FormField label="Терминал Id">
        <InputField read-only :modelValue="terminalIdTest" />
      </FormField>
      <FormField label="Серийный номер">
        <InputField read-only :modelValue="serialNumberTest" />
      </FormField>
      <div class="fault-card__history">

      </div>
    </div>
    
  </div>
</template>

<style>
.fault-card {
  background-color: white;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;

  padding: 8px;
  margin-top: 8px;
}

.fault-card__header {
  display: flex;
}

.fault-card__index {
  border-radius: 20%;

  text-align: center;

  background-color: #F0F2F8;
  width: 25px;
  height: 20px;
}

.fault-card__history {
  
}

</style>