import { defineStore } from "pinia";

import { getOrderFaults } from '../api';

const FAULT_IMAGE_KEY = 'fault-image';

export const useFaultStore = defineStore('faultStore', {
  state: () => {
    return {
      faults: {},
      images: {}
    }
  },
  getters: { },
  actions: {
    async receiveOrderFaults(orderId) {
      // @todo filters
      this.faults[orderId] = await getOrderFaults(orderId);
    },
    receiveFaultsImages() {
      let images = localStorage.getItem(FAULT_IMAGE_KEY);
      
      if (!images) {
        this.images = {};
        localStorage.setItem(FAULT_IMAGE_KEY, JSON.stringify(this.images));
        return;
      }
      try {
        this.images = JSON.parse(images);
      } catch (e) {
        // Если не валидный объект, то копируем значение и ставим валидный новый 
        localStorage.setItem("__" + FAULT_IMAGE_KEY, JSON.stringify(this.images));
        localStorage.setItem(FAULT_IMAGE_KEY, JSON.stringify({}));
      }
    },
    setFaultDbImage(faultId, imageId) {
      if (!this.images[faultId]) {
        this.images[faultId] = [];
      }

      this.images[faultId].push(imageId);

      localStorage.setItem(FAULT_IMAGE_KEY, JSON.stringify(this.images));
    },
    deleteImageId(faultId, imageId) {
      this.images[faultId] = this.images[faultId].filter(el => el != imageId);
      localStorage.setItem(FAULT_IMAGE_KEY, JSON.stringify(this.images));
    }
  }
});
