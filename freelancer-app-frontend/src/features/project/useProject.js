import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleProjectApi } from "../../services/projectsServices";

function useProject() {
  const { id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getSingleProjectApi(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
  return { isLoading, data };
}

export default useProject;
