<script setup lang="ts">
import { inject } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter, } from 'vue-router';

import SvgIcon from '@/shared/ui/icon/SvgIcon.vue';
import { useFilterStore } from "@/widgets/filters";
import { useServiceOrderStore, ServiceOrderTableRow } from "@/entities/service-order"
import { ClientFilter, OrderTypeFilter } from "@/widgets/filters";

const router = useRouter();

const filterStore = useFilterStore();
filterStore.initEntitiesFilters();

const serviceOrderStore = useServiceOrderStore();
serviceOrderStore.requestOrderList();

const { orders } = storeToRefs(serviceOrderStore);

function openServiceOrder(id: number) {
  router.push({
    name: 'ServiceOrderForm',
    query: {
      orderId: id
    }
  });
};
</script>

<template>
  <div class="page">
    <div class="page__filters">
      <ClientFilter />
      <OrderTypeFilter />
    </div>
    <div class="page__content service-order-list">
    <div class="service-order-list__header">
      <button class="service-order-list__sorting-btn">
        Sorting
        <SvgIcon name="down-arrow" color="#0007A6" />
      </button>
    </div>
    <table class="service-order-list__list">
      <ServiceOrderTableRow
        class="service-order-list__item"
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @click="openServiceOrder(order.id)"
      />
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
  color: #0007A6;
  font-weight: 500;

  position: relative;

  display: flex;
  gap: 4px;
  align-items: center;

  padding: 4px;
}

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