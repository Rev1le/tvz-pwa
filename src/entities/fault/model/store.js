import { defineStore } from "pinia";

import { getOrderFaults } from '../api';

export const useFaultStore = defineStore('faultStore', {
  state: () => {
    return {
      faults: {}
    }
  },
  actions: {
    async receiveOrderFaults(orderId) {
      // @todo filters
      this.faults[orderId] = await getOrderFaults(orderId);
    },
  }
});

