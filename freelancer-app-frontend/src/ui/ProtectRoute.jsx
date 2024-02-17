import { useNavigate } from "react-router-dom";
import useAuthorize from "../hooks/useAuthorize";
import toast from "react-hot-toast";
import Loader from "./Loader";


function ProtectRoute({children}) {
    const navigate = useNavigate()
    const {isLoading,isVerified,isAuthenticated,isAuthorized}=useAuthorize()

    if(!isLoading && !isAuthenticated)return navigate("/auth",{replace:true})
    if(!isLoading && !isVerified){
        toast.error("پروفایل شما در انتظار تایید است")
        navigate("/",{replace:true})
    }
    if(!isLoading && !isAuthorized)navigate("/not-access",{replace:true})
    if(isLoading){
        return <div className="h-screen bg-secondary-100 flex items-center justify-center"><Loader/></div>
    }
    if(!isLoading && isAuthenticated && isVerified && isAuthorized)return (
        children
    );
}

export default ProtectRoute;