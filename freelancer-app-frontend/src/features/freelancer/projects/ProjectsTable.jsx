import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import useAllProjects from "./useAllProjects";


function ProjectsTable() {
    const{isLoading,allProjects}=useAllProjects();

    if(isLoading)return<Loader/>
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>بودجه (تومان)</th>
                <th>ددلاین</th>
                <th>وضعیت</th>
                <th >عملیات</th>
            </Table.Header>
            <Table.Body>
                {allProjects.map((project,index)=><ProjectRow key={project._id} project={project} index={index}/>)}
            </Table.Body>
        </Table>
    );
}

export default ProjectsTable;