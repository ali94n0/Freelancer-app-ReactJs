
import ProjectTable from "../features/projects/ProjectTable";
import useOwnerProjects from "../features/projects/useOwnerProjects";
import Empty from "../ui/Empty";
import Loader from "../ui/Loader";


function Projects() {
 const {isLoading ,projects}=useOwnerProjects();


 if(isLoading)return <Loader/>;
 if(!projects.length)return <Empty/>

    
    return (
        <div>
            <ProjectTable projects={projects}/>
        </div>
    );
}

export default Projects;