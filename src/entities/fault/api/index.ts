import { axiosInstance } from "@/shared/api";

export const getOrderFaults = async (orderId: number) => {
  const reqUrl = "/main/pwa/order-faults/";
  const reqParams = {params: {orderId: orderId}};
  const response = await axiosInstance.get(reqUrl, reqParams);
  return response.data;
};