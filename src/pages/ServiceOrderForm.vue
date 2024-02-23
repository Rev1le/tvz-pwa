<script setup>
// import { FormField } from "../entities/form-field";
import LinkExt from "../shared/assets/icons/link-ext.svg";
import { Tabs } from '../widgets/tabs';
import { FieldGroup } from '../entities/field-group';
import { ref } from 'vue';
import { FormField, InputField } from "../entities/field";


// import FilterSpan from "./FilterSpan.vue"

const tab = ref(null);

</script>

<template>
  <div class="service-order-form">
    
    <Tabs @changeTab="tab = $event" />
    <div class="service-order-form__fields common-labels">
      <div class="common-labels__labels">
        <div class="label">
          <span class="label__title">Приоритет:</span>
          <span class="label__value">Низкий</span>
        </div>
        <div class="label">
          <span class="label__title">Клиент:</span>
          <span class="label__value">Леруа Мерлен</span>
        </div>
        <div class="label">
          <span class="label__title">Постгарантийный период:</span>
          <span class="label__value">отустствует</span>
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
        <span class="link-btn"><LinkExt /></span>
        <span class="link-btn"><LinkExt /></span>
        <span class="link-btn"><LinkExt /></span>
      </div>

    </div>
    <div class="service-order-form__fields">
      <FormField label="Площадка">
        <InputField placeholder="Выберит площадку" />
      </FormField>
      <FormField label="Отдел">
        <InputField />
      </FormField>
    </div>
    <div class="service-order-form__fields">
      <FieldGroup>
        <template v-slot:fields>
          <div style="display: flex; flex-direction: column; gap: 5px; margin-top: 10px;">
            <FormField />
            <FormField />
          </div>
        </template>
      </FieldGroup>
    </div>
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
</style>