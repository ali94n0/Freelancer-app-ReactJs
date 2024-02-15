
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import StatDashboard from "./StatDashboard";


function DashboardLayout() {
    const{isLoading,proposals}=useProposals()
    
    return (
        <div>
            <div>
                <DashboardHeader/>
                {isLoading ? <Loader/> : <StatDashboard proposals={proposals}/>}
            </div>
        </div>
    );
}

export default DashboardLayout;