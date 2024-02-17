import useCategories from "../../hooks/useCategories";
import Loader from "../../ui/Loader";
import useAllProjects from "../freelancer/projects/useAllProjects";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "./DashboardHeader";
import StatDashboard from "./StatDashboard";
import useUsers from "./users/useUsers";


function DashboardLayout() {
    const {isLoading:isLoading1,allProjects}=useAllProjects()
    const{isLoading:isLoading2,proposals}=useProposals()
    const{isLoading:isLoading3,users}=useUsers()
    const {isLoading:isLoading4,rawCategories}=useCategories()
let isAllLoading = false


    if(isLoading1 || isLoading2 || isLoading3 || isLoading4){
        isAllLoading= true
    }
    return (
        <div>
            <div>
                <DashboardHeader/>
                {isAllLoading ? <Loader/> : <StatDashboard users={users} categories={rawCategories} proposals={proposals} allProjects={allProjects}/>}
                
            </div>
        </div>
    );
}

export default DashboardLayout;