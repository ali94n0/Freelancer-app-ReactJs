import { useNavigate } from "react-router-dom";
//move bach hook
function useBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}

export default useBack;
