
import { formatPrice, toFarsiNumber } from "../../utils/CostomizePrice";
import Modal from "../../ui/Modal";
import {  HiEye, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";

import ConfirmDelete from "../../ui/ConfirmDelete";
import { useState } from "react";
import Table from "../../ui/Table";
import useRemoveProject from "./useRemoveProject";
import CreateProject from "./CreateProject";
import truncateString from "../../ui/truncateString";
import ToggleProjectStatus from "./toggleProjectStatus";
import {Link} from "react-router-dom"


function ProjectRow({project,index}) {
    const [isEditOpen,setIsEditOpen] = useState(false);
    const [isDeleteOpen,setIsDeleteOpen] = useState(false);
    const {isDeleting,removeProject} =useRemoveProject()
    return (
        <Table.Row key={project._id}>
                       <td>{toFarsiNumber(index + 1)}</td>
                       <td>{truncateString(project.title,15)}</td>
                       <td>{project.category.title}</td>
                       <td>{formatPrice(project.budget)}</td>
                       <td>{new Date(project.deadline).toLocaleDateString("fa-ir")}</td>
                       <td className={project?.tags.length && "flex flex-wrap gap-1 items-center max-w-[200px] lg:max-w-[300px]"}>{project?.tags.map(tag=><span className="badge badge--secondary" key={tag}>
                               {tag}
                           </span>)}
                       </td>
                       <td>{project.freelancer?.name || "-"}</td>
                       <td>
                           <ToggleProjectStatus status={project.status} id={project._id}/> 
                       {/* {project.status === "OPEN" ? <span className="badge badge--success">باز</span> : <span className="badge badge--danger">بسته</span> } */}
                       </td>
                       <td>
                           <div className="flex items-center gap-x-3">
                               <>
                                   <button onClick={()=>setIsEditOpen(true)} className="py-0.5 px-1">
                                       <HiOutlinePencilAlt className="w-5 h-5 text-primary-900"/>
                                   </button>
                                   <Modal  isOpen={isEditOpen} onClose={()=>setIsEditOpen(false)} title={project.title} >
                                           <CreateProject onClose={()=>setIsEditOpen(false)} projectToEdit={project}/>
                                   </Modal>
                               </>
                               <>
                                   <button onClick={()=>setIsDeleteOpen(true)} className="py-0.5 px-1">
                                           <HiOutlineTrash className="w-5 h-5 text-error"/>
                                   </button>
                                   <Modal isOpen={isDeleteOpen} title={project.title} onClose={()=>setIsDeleteOpen(false)}>
                                       <ConfirmDelete resourceName={project.title} onClose={()=>setIsDeleteOpen(false)}
                                       onConfirm={
                                        ()=>removeProject(project._id,{
                                            onSuccess: ()=>setIsDeleteOpen(false)
                                        })
                                       } disabled={isDeleting}/>
                                   </Modal>
                               </>
                           </div>
                       </td>
                       <td >
                        <div className="flex justify-center">
                        <Link to={`${project._id}`} className="text-primary-800 py-1 px-2">
                            <HiEye className="w-4 h-4"/>
                        </Link>
                        </div>
                        
                       </td>
                       </Table.Row>
    );
}

export default ProjectRow;