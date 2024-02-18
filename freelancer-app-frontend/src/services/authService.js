import http from "./httpServise";
//all api services about Auth user is here
export const getOtp = (data) => {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfile = (data) => {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
};

export const getUser = () => {
  return http.get("/user/profile").then(({ data }) => data.data);
};

export const logoutApi = () => {
  return http.post("/user/logout").then(({ data }) => console.log(data));
};

export const getAllUsersApi = () => {
  return http.get("/admin/user/list").then(({ data }) => data.data);
};

export const changeUserStatusApi = ({ id, data }) => {
  return http
    .patch(`/admin/user/verify/${id}`, data)
    .then(({ data }) => data.data);
};
