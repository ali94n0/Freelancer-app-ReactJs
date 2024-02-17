import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from "../services/projectsServices";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });

  const { categories: rawCategories } = data || {};

  const categories = rawCategories?.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const formatCategories = rawCategories?.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, formatCategories, rawCategories };
}
