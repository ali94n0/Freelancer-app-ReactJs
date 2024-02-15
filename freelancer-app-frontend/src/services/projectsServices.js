import http from "./httpServise";

export const getOwnerProjectsApi = () => {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const removeProjectApi = (id) => {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
};

export const getCategoriesApi = () => {
  return http.get("category/list").then(({ data }) => data.data);
};

export const createProjectApi = (data) => {
  return http.post("project/add", data).then(({ data }) => data.data);
};

export const editProjectApi = ({ id, data }) => {
  return http.patch(`project/update/${id}`, data).then(({ data }) => data.data);
};

export const updateProjectStatusApi = ({ id, data }) => {
  return http.patch(`/project/${id}`, data).then(({ data }) => data.data);
};

export const getSingleProjectApi = (id) => {
  return http.get(`/project/${id}`).then(({ data }) => data.data);
};

export const getAllProjectListApi = (search) => {
  return http.get(`/project/list${search}`).then(({ data }) => data.data);
};
