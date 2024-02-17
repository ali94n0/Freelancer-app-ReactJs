


import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import useAllProjects from "../../freelancer/projects/useAllProjects";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
    const{isLoading,allProjects}=useAllProjects()
    if(isLoading)return <Loader/>;
       return (
           <Table>
               <Table.Header >
                   <th >#</th>
                   <th>عنوان پروژه</th>
                   <th>دسته بندی</th>
                   <th>بودجه (تومان)</th>
                   <th>ددلاین</th>
                   <th>فریلنسر</th>
                   <th>وضعیت</th>
               </Table.Header>
               <Table.Body>
   
                   {allProjects.map((project,index)=><ProjectRow project={project} index={index} key={project._id}/>)}
   
                </Table.Body>
                   
           </Table>
       );
   }
   
   export default ProjectTable;