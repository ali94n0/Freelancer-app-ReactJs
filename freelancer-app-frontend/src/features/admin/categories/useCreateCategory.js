import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewCategoryApi } from "../../../services/categoriesService";
import toast from "react-hot-toast";

const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: createCategory } = useMutation({
    mutationFn: addNewCategoryApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error);
    },
  });
  return { isPending, createCategory };
};

export default useCreateCategory;
