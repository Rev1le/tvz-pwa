import { defineStore } from "pinia";

import { getOrderFaults } from '../api';

import { getStoreTransaction } from './db';

import { inject } from 'vue';

const FAULT_IMAGE_KEY = 'fault-image';

export const useFaultStore = defineStore('faultStore', {
  state: () => {
    return {
      faults: {},
      images: {}
    }
  },
  getters: {
    faultImages(state) {
      return (faultId) => state.images[faultId];
    },
    dbImagesUrlList(state) {
      return async (faultId, db) => {
        const faultImages = state.images[faultId] ?? [];
        const store = getStoreTransaction(db);

        const urlList = [];

        for (const faultImageId of faultImages) {
          const value = await store.get(faultImageId);
          const imageBlog = new Blob([value.data]);
          const src = URL.createObjectURL(imageBlog);

          urlList.push(src);
        }

        return urlList;
      }
    },
  },
  actions: {
    async receiveOrderFaults(orderId) {
      // @todo filters
      this.faults[orderId] = await getOrderFaults(orderId);
    },
    receiveImages() {
      let images = localStorage.getItem(FAULT_IMAGE_KEY);
      
      if (!images) {
        localStorage.setItem(FAULT_IMAGE_KEY, {});
        this.images = {};
      }

      this.images = JSON.parse(images);
    },
    setFaultDbImage(faultId, imageId) {
      if (!this.images[faultId]) {
        this.images[faultId] = [];
      }

      this.images[faultId].push(imageId);

      localStorage.setItem(FAULT_IMAGE_KEY, JSON.stringify(this.images));
    }
    // saveImageFile(faultId, file) {
    //   const file = await prepareFileForDb(file);
    //   const db = await dbPromise;

    //   const store = getStoreTransaction(db, 'readwrite');
    //   store.add(file);
    // }
  }
});
