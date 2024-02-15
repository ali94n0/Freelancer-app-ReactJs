import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { changeProposalStatus } from "../../services/ProposalService";

function useChangeProposalStatus() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeProposalStatus,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["project", id],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isChanging, changeStatus };
}

export default useChangeProposalStatus;
