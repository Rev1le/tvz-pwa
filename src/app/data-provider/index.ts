import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => {
        return { 
          isOnline: true
        }
      },
      actions: {
        initOrdersCollection() {},
      },
      getters: {
        getAppStatus: (state) => state.isOnline,
      },
});
