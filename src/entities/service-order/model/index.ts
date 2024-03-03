import { defineStore } from "pinia";

import * as tvzApi from '../api';

interface OrderTaskTypes {
  stageOrderPreparation: Array<any>;
  stageEquipmentPreparation: Array<any>;
  stageOrderCompletion: Array<any>;
}

interface ServiceOrderCard {
  id: number;
  name: string;
  priority: number;
  allFaultAmount: number;
  openedFaultAmount: number;
  clientName: string;
  rootStorageName: string;
  dateStart: string;
  dateExecution: string;
  dateStop: string;
  contractorName: string;
  tasks: OrderTaskTypes
}

type StoreState = {
  orders: ServiceOrderCard[];
};

export const useServiceOrderStore = defineStore("service-order", {
  state: (): StoreState => ({
    orders: [],
  }),
  actions: {
    async requestOrderList() {
      this.orders = await tvzApi.getOrderdList();
    },
  },
});



