import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isPending, changeUserStatus };
};

export default useChangeUserStatus;
