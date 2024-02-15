import http from "./httpServise";

export const changeProposalStatus = ({ proposalId, ...rest }) => {
  return http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => {
    data.data;
  });
};

export const getAllProposalsListApi = () => {
  return http.get("proposal/list").then(({ data }) => data.data);
};

export const createProposalApi = (data) => {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
};
