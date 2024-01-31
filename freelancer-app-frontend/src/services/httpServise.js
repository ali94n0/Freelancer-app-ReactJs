import axios from "axios";

const newInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: newInstance.get,
  post: newInstance.post,
  put: newInstance.put,
  patch: newInstance.patch,
  delete: newInstance.delete,
};

axios.interceptors.request.use(
  (res) => res,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (error?.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await http.get("/user/refresh-token");
        if (data) return newInstance(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default http;
