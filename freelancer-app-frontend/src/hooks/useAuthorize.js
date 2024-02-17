import { useLocation } from "react-router-dom";
import useUser from "../features/authentication/useUser";

function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();
  //   console.log(pathname.split("/").at(1).toUpperCase());
  const desiredRole = pathname.split("/").at(1).toUpperCase();

  let isAuthenticated = false;
  let isVerified = false;
  let isAuthorized = false;
  if (user) isAuthenticated = true;
  if (user && user?.status === 2) isVerified = true;

  const ROLES = {
    ADMIN: "admin",
    OWNER: "owner",
    FREELANCER: "freelancer",
  };
  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === desiredRole) {
      isAuthorized = true;
    } else {
      isAuthorized = false;
    }
  }
  return { isLoading, isAuthenticated, isVerified, isAuthorized };
}

export default useAuthorize;
