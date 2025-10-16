import axiosInstance from "./axiosInstance";

export const productApi = {
  list: async () => {
    const res = await axiosInstance.get("/products");
    return res.data;
  },

  create: async (payload) => {
    const res = await axiosInstance.post("/products", payload);
    return res.data;
  },

  update: async (id, payload) => {
    const res = await axiosInstance.put(`/products/${id}`, payload);
    return res.data;
  },

  remove: async (id) => {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
  },
};
