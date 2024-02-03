import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectsServices";

function useOwnerProjects() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
    retry: false,

    refetchOnWindowFocus: true,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}

export default useOwnerProjects;
