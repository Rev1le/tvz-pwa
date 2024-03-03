import { axiosInstance } from "@/shared/api";


export const getAllFilters = async () => {
  const reqUrl = "/main/pwa/filters/";
  const response = await axiosInstance.get(reqUrl);
  return response.data;
};
