import {catchResponse} from "@/shared/lib/logger";
import { axiosInstance } from "@/shared/api";

export const getOrderFaults = async (orderId: number) => {
  const reqUrl = "/api/main/pwa/order-faults/";
  const reqParams = {params: {orderId: orderId}};
  const response = await axiosInstance
    .get(reqUrl, reqParams)
    .catch(catchResponse);
  return response?.data ?? [];
};