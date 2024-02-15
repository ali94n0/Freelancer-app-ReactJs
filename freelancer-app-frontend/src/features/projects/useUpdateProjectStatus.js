import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectStatusApi } from "../../services/projectsServices";
import toast from "react-hot-toast";

function useUpdateProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateStatus } = useMutation({
    mutationFn: updateProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isUpdating, updateStatus };
}

export default useUpdateProjectStatus;
