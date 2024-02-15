import { useQuery } from "@tanstack/react-query";
import { getAllProposalsListApi } from "../../services/ProposalService";

function useProposals() {
  const { isLoading, data } = useQuery({
    queryKey: ["proposals"],
    queryFn: getAllProposalsListApi,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}

export default useProposals;
