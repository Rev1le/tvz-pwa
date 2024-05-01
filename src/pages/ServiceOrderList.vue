<script setup lang="ts">
import { inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter, } from 'vue-router';
import { useFilterStore } from "@/entities/filters";
import Arrow from "@/shared/ui/assets/icons/down-arrow.svg";
import { useServiceOrderStore, ServiceOrderTableRow } from "@/entities/service-order"
// import {TaskList} from "@/widgets/task-list";
// import { SelectField } from "@/shared/ui/field";
import { ClientFilter, OrderTypeFilter } from "@/widgets/filters";

const filterStore = useFilterStore();
filterStore.initEntitiesFilters();

const router = useRouter();

const serviceOrderStore = useServiceOrderStore();
serviceOrderStore.requestOrderList();
const { orders } = storeToRefs(serviceOrderStore);

function openServiceOrder(id: number) {
  router.push({
    name: 'ServiceOrderForm',
    query: {
      orderId: id
    },
  })
}

import SvgIcon from '@/shared/ui/icon/SvgIcon.vue';

</script>

<template>
  <div class="page">
    <div class="page__filters">
      <ClientFilter />
      <OrderTypeFilter />
      <!-- <SelectField />
      <SelectField /> -->
    </div>
    <div class="page__content service-order-list">
      <div class="service-order-list__header">
        <button class="service-order-list__sorting-btn">
          Sorting
          <Arrow id="sorting-arrow" viewBox="0 0 16 8" width="12px" height="8px" />
        </button>
        <!-- Sorting <Arrow /> -->
      </div>
    <table class="service-order-list__list">
      <ServiceOrderTableRow
        class="service-order-list__item"
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @click="openServiceOrder(order.id)"
      />


      <!-- <tr class="service-order-list__item" v-for="order in orders" :key="order.id" @click="openServiceOrder(order.id)">
        <td class="service-order-list__icon">
          <svg width="20px" height="24px" viewBox="0 0 20 24" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5846 21.4296C19.706 21.4296 19.8055 21.4696 19.8833 21.5496C19.9611 21.6296 20 21.732 20 21.8568L20 23.5704C20 23.6968 19.9611 23.8 19.8833 23.88C19.8055 23.96 19.706 24 19.5846 24L0.417688 24C0.294793 24 0.194454 23.96 0.116673 23.88C0.0388908 23.8 0 23.6968 0 23.5704L0 21.8568C0 21.732 0.0388908 21.6296 0.116673 21.5496C0.194454 21.4696 0.294793 21.4296 0.417688 21.4296L19.5846 21.4296L19.5846 21.4296ZM1.69165 20.5704C1.7181 20.0808 1.7881 19.6032 1.90166 19.1376C2.01522 18.672 2.14512 18.248 2.29135 17.8656C2.43758 17.4832 2.63748 17.0952 2.89104 16.7016C3.14461 16.308 3.3764 15.9688 3.58641 15.684C3.79642 15.3992 4.07644 15.0888 4.42645 14.7528C4.77647 14.4168 5.06349 14.1488 5.2875 13.9488C5.51151 13.7488 5.81719 13.5032 6.20454 13.212C6.59189 12.9208 6.88046 12.7088 7.07025 12.576C7.26004 12.4432 7.54239 12.2512 7.91729 12C7.54394 11.7504 7.26159 11.5584 7.07025 11.424C6.87891 11.2896 6.59034 11.0776 6.20454 10.788C5.81875 10.4984 5.51306 10.2528 5.2875 10.0512C5.06193 9.8496 4.77492 9.58159 4.42645 9.2472C4.07799 8.9128 3.79798 8.6024 3.58641 8.316C3.37485 8.0296 3.14306 7.6904 2.89104 7.2984C2.63903 6.9064 2.43913 6.5184 2.29135 6.1344C2.14356 5.75039 2.01367 5.32639 1.90166 4.8624C1.78965 4.3984 1.71965 3.9208 1.69165 3.4296L18.3081 3.4296C18.2817 3.9192 18.2125 4.3968 18.1005 4.8624C17.9885 5.328 17.8578 5.752 17.7085 6.1344C17.5591 6.5168 17.36 6.9048 17.1111 7.2984C16.8622 7.692 16.6296 8.0312 16.4134 8.316C16.1972 8.6008 15.9171 8.9112 15.5733 9.2472C15.2296 9.5832 14.9433 9.8512 14.7146 10.0512C14.486 10.2512 14.1795 10.4968 13.7953 10.788C13.411 11.0792 13.1224 11.2912 12.9295 11.424C12.7366 11.5568 12.4551 11.7488 12.0848 12C12.4582 12.2496 12.7398 12.4416 12.9295 12.576C13.1193 12.7104 13.4079 12.9224 13.7953 13.212C14.1826 13.5016 14.4891 13.7472 14.7146 13.9488C14.9402 14.1504 15.2264 14.4184 15.5733 14.7528C15.9202 15.0872 16.2003 15.3976 16.4134 15.684C16.6265 15.9704 16.8591 16.3096 17.1111 16.7016C17.3631 17.0936 17.5622 17.4816 17.7085 17.8656C17.8547 18.2496 17.9854 18.6736 18.1005 19.1376C18.2156 19.6016 18.2848 20.0792 18.3081 20.5704L1.69165 20.5704L1.69165 20.5704ZM19.5846 0C19.706 0 19.8055 0.04 19.8833 0.12C19.9611 0.2 20 0.3032 20 0.4296L20 2.1432C20 2.268 19.9611 2.3704 19.8833 2.4504C19.8055 2.5304 19.706 2.5704 19.5846 2.5704L0.417688 2.5704C0.294793 2.5704 0.194454 2.5304 0.116673 2.4504C0.0388908 2.3704 0 2.268 0 2.1432L0 0.4296C0 0.3032 0.0388908 0.2 0.116673 0.12C0.194454 0.04 0.294793 0 0.417688 0L19.5846 0L19.5846 0Z" id="Shape" fill="#2AC04B" fill-rule="evenodd" stroke="none" />
          </svg>
        </td>
        <td class="table-field">
          <span class="table-field__name">Кол-во техники</span>
          <span class="table-field__value"> {{ order.openedFaultAmount }}/{{ order.allFaultAmount }} </span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Название</span>
          <span class="table-field__value">{{ order.name }}</span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Id заявки</span>
          <span class="table-field__value">{{ order.id }}</span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Город</span>
          <span class="table-field__value"></span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Подготовка заявки</span>
          <span class="table-field__value">
            <TaskList :taskList="order.tasks.stageOrderPreparation" />
          </span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Дата создания заявки</span>
          <span class="table-field__value">{{ order.dateStart }}</span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Подготовка оборудования</span>
          <span class="table-field__value">
            <TaskList :taskList="order.tasks.stageEquipmentPreparation" />
          </span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Дата выезда установщика</span>
          <span class="table-field__value">{{ order.dateExecution }}</span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Завершение заявки</span>
          <span class="table-field__value">
            <TaskList :taskList="order.tasks.stageOrderCompletion" />
          </span>
        </td>
        <td class="table-field">
          <span class="table-field__name">Дата закрытия заявки</span>
          <span class="table-field__value">{{ order.dateStop }}</span>
        </td>
      </tr> -->
    </table>
    </div>
  </div>
</template>

<style>

.service-order-list__icon {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
}

.service-order-list {
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.service-order-list__item {
  margin: 10px 0px;
}

.service-order-list__header {
  display: flex;
  gap: 8px;

  justify-content: flex-end;
}


.service-order-list__sorting-btn {

  background-color: unset;
  border: none;

  color: rgb(0, 97, 166);
  line-height: 1.2rem;
  margin-inline-start: 8px;
  block-size: 24px;
  font-weight: 500;

  position: relative;
}

/* .service-order-list__sorting-modal {
  position: absolute;
  transition: opacity 350ms cubic-bezier(0.34, 1.61, 0.7, 1) 0s, transform 450ms cubic-bezier(0.34, 1.61, 0.7, 1) 0s;
}
.service-order-list__sorting-modal-arrow::before {
  content: "";
  position: absolute;
  inline-size: 0px;
  block-size: 0px;

  inset-block-start: -12px;
  border-inline: 12px solid transparent;
  border-block-end: 12px solid var(--euiPopoverBackgroundColor);
} */


.service-order-list__sorting-btn:active {
  background-color: rgba(0, 119, 204, 0.1);
}

.service-order-list__item {
  background-color: white;
  padding: 8px;
  box-shadow:
    0 .7px 1.4px rgba(0,0,0,.07),
    0 1.9px 4px rgba(0,0,0,.05),
    0 4.5px 10px rgba(0,0,0,.05);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  
}

.service-order-list__item:active {
  /* @todo Добавить анимацию */
}

#sorting-arrow {
  fill: rgb(0, 97, 166);
  margin-left: 5px;
}

</style>