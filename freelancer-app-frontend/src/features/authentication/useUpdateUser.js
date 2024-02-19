import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserApi } from "../../services/authService";
import { toast } from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: updateUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isPending, updateUser };
};

export default useUpdateUser;
