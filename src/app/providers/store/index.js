import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isOnlineMode: true
    }),
    getters: {
    },
    actions: {

    }
});
