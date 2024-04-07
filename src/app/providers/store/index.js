import { defineStore } from "pinia";

export const useAppStore = defineStore('app', {
    state: () => ({
        isOnlineMode: true,
        db: null
    }),
    getters: {
    },
    actions: {

    }
});
