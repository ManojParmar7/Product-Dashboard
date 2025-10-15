import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "https://fakestoreapi.com/";

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
