import { useQuery } from "@tanstack/react-query";
import { getAllProjectListApi } from "../../../services/projectsServices";
import { useLocation } from "react-router-dom";

function useAllProjects() {
  const { search } = useLocation();
  const queryStrings = Object.fromEntries(new URLSearchParams(search));

  const { isLoading, data } = useQuery({
    queryKey: ["allProjects", queryStrings],
    queryFn: () => getAllProjectListApi(search),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { projects: allProjects } = data || {};
  return { isLoading, allProjects };
}

export default useAllProjects;
