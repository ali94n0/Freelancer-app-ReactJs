import http from "./httpServise";

export const addNewCategoryApi = (data) => {
  return http.post("admin/category/add", data).then(({ data }) => data.data);
};

export const removeCategoryApi = ({ id }) => {
  return http
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data.data);
};

export const editCategoryApi = ({ id, data }) => {
  return http
    .patch(`admin/category/update/${id}`, data)
    .then(({ data }) => data.data);
};
