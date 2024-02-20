import { defineStore } from 'pinia'

export const useServiceWorkerStore = defineStore('serviceWorker', {
  state: () => {
    return { 
      orders: undefined
    }
  },
  actions: {
    initOrdersCollection() {
      if (!this.orders !== undefined) {
        return;
      }
      this.orders = {
        1: {
          name: 'FirestOrder'
        },
        2: {
          name: 'SecondOrder'
        }
      }
    },
  },
  getters: {
    getOrderById: (state) => {
      return (orderId) => state.orders[orderId] ?? null;
    },
  },
})