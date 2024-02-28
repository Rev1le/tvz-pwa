import { defineStore } from "pinia";

import { axiosInstance } from "@/shared/api";

type State = {
  orders: number[];
};

export const useServiceOrderStore = defineStore("service-order", {
  state: (): State => ({
    orders: [],
  }),
  actions: {
    async requestOrderList() {
      const reqUrl = "/main/pwa/service-order-list/";
      const response = await axiosInstance.get(reqUrl);
      this.orders = response.data;
    }
  }
});
