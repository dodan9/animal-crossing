import axios from "axios";
import qs from "qs";

export const nookRequest = axios.create({
  baseURL: import.meta.env.PROD
    ? `${import.meta.env.VITE_NOOKIPEDIA_URL}`
    : "/nooki",
  withCredentials: true,
  timeout: 100000,
  headers: {
    "X-API-KEY": import.meta.env.VITE_NOOKIPEDIA_KEY,
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "repeat", skipNulls: true });
  },
});

nookRequest.interceptors.request.use((config) => {
  return config;
});

nookRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  }
);

export const imgRequest = axios.create({
  baseURL: import.meta.env.PROD ? "https://dodo.ac" : "/img",
});
imgRequest.interceptors.request.use((config) => {
  return { ...config, url: config.url?.replace(/^https:\/\/dodo\.ac/, "") };
});
