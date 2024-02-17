import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../../../services/authService";

const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
    retry: false,
    refetchOnWindowFocus: true,
  });
  const { users } = data || {};

  return { isLoading, users };
};

export default useUsers;
