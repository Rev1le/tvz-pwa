import { catchResponse } from "@/shared/lib/logger";
import { axiosInstance } from "@/shared/api";

export const getOrderdList = async (): Promise<any[]> => {
  const reqUrl = "/main/pwa/service-order-list/";
  const response = await axiosInstance
    .get(reqUrl)
    .catch(catchResponse);
  return response?.data ?? [];
};
