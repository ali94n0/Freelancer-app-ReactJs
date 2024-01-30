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

export default http;
