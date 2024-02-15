
import ProposalHeader from "../features/project/ProposalHeader";
import ProposalTable from "../features/project/ProposalTable";
import useProject from "../features/project/useProject";
import Loader from "../ui/Loader";


function Project() {
    const {isLoading,data}=useProject()
    const {project} = data || {}

    
    return (
        isLoading ? <Loader/> : <div >
        <ProposalHeader project={project} />
        <ProposalTable proposals={project?.proposals}/>
    </div>
    );
}

export default Project;