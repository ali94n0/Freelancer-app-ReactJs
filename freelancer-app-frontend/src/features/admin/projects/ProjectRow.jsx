
import Table from "../../../ui/Table";
import { formatPrice, toFarsiNumber } from "../../../utils/CostomizePrice";
import truncateString from "../../../ui/truncateString";






function ProjectRow({project,index}) {
    
    return (
        <Table.Row key={project._id}>
                       <td>{toFarsiNumber(index + 1)}</td>
                       <td>{truncateString(project.title,15)}</td>
                       <td>{project.category.title}</td>
                       <td>{formatPrice(project.budget)}</td>
                       <td>{new Date(project.deadline).toLocaleDateString("fa-ir")}</td>

                       {/* optional for show freelancer ,this option should be control from backend */}
                       <td>{project?.freelancer?.name || "-"}</td> 
                       <td>
                           {/* <ToggleProjectStatus status={project.status} id={project._id}/>  */}
                       {project.status === "OPEN" ? <span className="badge badge--success">باز</span> : <span className="badge badge--danger">بسته</span> }
                       </td>
                       
                       </Table.Row>
    );
}

export default ProjectRow;