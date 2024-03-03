import { axiosInstance } from "@/shared/api";

export const getOrderdList = async (): Promise<any[]> => {
  const reqUrl = "/main/pwa/service-order-list/";
  const response = await axiosInstance.get(reqUrl);
  return response.data ?? [];
};
