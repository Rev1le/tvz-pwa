<script setup>
import LinkExt from "@/shared/ui/assets/icons/link-ext.svg";
import FolderOpenEmpty from "@/shared/ui/assets/icons/folder-open-empty.svg";
import DocText from "@/shared/ui/assets/icons/doc-text.svg";
import { Tabs } from '@/widgets/tabs';
import { FaultList } from '@/widgets/fault/fault-list';
import { FieldGroup } from '@/entities/field-group';
import { ref, computed } from 'vue';
import { storeToRefs } from "pinia";
import { useRoute } from 'vue-router';
import { FormField, InputField } from "@/shared/ui/field";

import { useFaultStore, FaultTableRow } from '@/entities/fault';

const faultStore = useFaultStore();
const route = useRoute();
faultStore.receiveOrderFaults(route.query.orderId);

const {faults} = storeToRefs(faultStore);

const tab = ref(null);

</script>

<template>
  <div class="service-order-form">
    
    <Tabs @changeTab="tab = $event" />
    <div class="service-order-form__fields common-labels">
      <div class="common-labels__labels">
        <div class="label">
          <span class="label__title">Клиент:</span>
          <span class="label__value">Леруа Мерлен</span>
        </div>
        <div class="label">
          <span class="label__title">Площадка:</span>
          <span class="label__value"></span>
        </div>
        <div class="label">
          <span class="label__title">Адрес:</span>
          <span class="label__value"></span>
        </div>
      </div>
      <div class="common-labels__link-btn-list">
        <span class="link-btn"><DocText /></span>
        <span class="link-btn"><LinkExt /></span>
      </div>
    </div>

    <div class="service-order-form__fields">
      <h3>Список техники</h3>
      <table class="service-order-form__fault-list">
        <FaultTableRow
          v-for="fault in faults[route.query.orderId]"
          :fault="fault"
          :key="fault.id"
        />
      </table>
      <!-- <div class="service-order-form__car-list">
        <FaultTableRow />
        <div
          class="service-order-form__car-item"
          v-for="fault in faults[route.query.orderId]">
          {{ fault.carName }}
        </div>
      </div> -->
    </div>

    <!-- <div class="service-order-form__fields">
      <FieldGroup>
        <template v-slot:fields>
          <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 10px;">
            
            <FormField label="Дата"><InputField /></FormField>
            <FormField label="Дата еще"><InputField /></FormField>
          </div>
        </template>
      </FieldGroup>
    </div>
    <div class="service-order-form__fields">
      <h4>Неисправности</h4>
      <FaultList />
    </div> -->
  </div>
</template>

<style>
.service-order-form {
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}



.service-order-form__fields {
  border-radius: 0px;
  background-color: white;
  padding: 8px;
}

.common-labels__labels {
  flex: 1;
  padding: 8px;
  border: 2px dashed blue;
}

.label {
  margin-top: 12px;
  /* display: flex;
  gap: 5px;
  align-items: flex-end; */
}

.label__title {
  color: #85868C;
  font-size: 18px;
}

.label__value {
  font-size: 16px;
  margin-left: 5px;
}

.link-btn {
  background-color: #CCE4F5;
  padding: 10px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.common-labels {
  display: flex;
  gap: 10px;
}

.common-labels__link-btn-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
}


.service-order-form__car-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-order-form__fault-list {
  width: 100%;
}

.service-order-form__car-item {
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);

  padding: 5px;
}
</style>