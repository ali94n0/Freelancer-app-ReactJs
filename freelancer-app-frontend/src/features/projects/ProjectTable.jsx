

import Table from "../../ui/Table";
import ProjectRow from "./projectRow";

function ProjectTable({projects}) {
    
    
   
 
   
       
       return (
           <Table>
               <Table.Header>
                   <th>#</th>
                   <th>عنوان پروژه</th>
                   <th>دسته بندی</th>
                   <th>بودجه</th>
                   <th>ددلاین</th>
                   <th>تگ ها</th>
                   <th>فریلنسر</th>
                   <th>وضعیت</th>
                   <th>عملیات</th>
               </Table.Header>
               <Table.Body>
   
                   {projects.map((project,index)=><ProjectRow project={project} index={index} key={project._id}/>)}
   
                       </Table.Body>
                   
           </Table>
       );
   }
   
   export default ProjectTable;