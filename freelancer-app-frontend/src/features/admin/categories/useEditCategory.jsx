import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCategoryApi } from "../../../services/categoriesService";
import toast from "react-hot-toast";


const useEditCategory = () => {
    const queryClient=useQueryClient()
    const{isPending,mutate:editCategory}=useMutation({
        mutationFn:editCategoryApi,
        onSuccess:(data)=>{
            toast.success(data?.message)
            queryClient.invalidateQueries({queryKey:["categories"]})
        },
        onError: (error)=>{
            toast.error(error?.response?.data?.message)
        }
    })
    return{isPending,editCategory}
};

export default useEditCategory;