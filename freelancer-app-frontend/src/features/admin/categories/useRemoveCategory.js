import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCategoryApi } from "../../../services/categoriesService";
import toast from "react-hot-toast";

const useRemoveCategory = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: removeCategory } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isPending, removeCategory };
};

export default useRemoveCategory;
