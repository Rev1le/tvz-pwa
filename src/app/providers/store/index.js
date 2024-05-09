import { defineStore } from "pinia";

import { axiosInstance } from '@/shared/api';
import { catchResponse } from "@/shared/lib/logger";

export const useAppStore = defineStore('app', {
  state: () => ({
    version: 0,
    isOnlineMode: true,
    db: null,
    user: null
  }),
  getters: {
  },
  actions: {
    initAppData() {
      axiosInstance.get('/api/main/pwa/app-version/', {})
        .then(r => {
          console.log(r.data);
          this.version = 1;})
        .catch(catchResponse);
    },
    initAuthUser() {
      return axiosInstance
        .get("/api/main/pwa/user/")
        .then(r => this.user = r.data)
        .catch(catchResponse);;
    }
  }
});
