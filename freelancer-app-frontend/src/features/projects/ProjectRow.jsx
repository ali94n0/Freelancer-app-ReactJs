
import { formatPrice } from "../../utils/CostomizePrice";
import Modal from "../../ui/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import {TbPencilMinus} from "react-icons/tb"
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useState } from "react";
import Table from "../../ui/Table";
import useRemoveProject from "./useRemoveProject";


function ProjectRow({project,index}) {
    const [isEditOpen,setIsEditOpen] = useState(false);
    const [isDeleteOpen,setIsDeleteOpen] = useState(false);
    const {isDeleting,removeProject} =useRemoveProject()
    return (
        <Table.Row key={project._id}>
                       <td>{index+1}</td>
                       <td>{project.title}</td>
                       <td>{project.category.title}</td>
                       <td>{formatPrice(project.budget)}</td>
                       <td>{new Date(project.deadline).toLocaleDateString("fa-ir")}</td>
                       <td>{project.tags.map(tag=><span className="badge badge--secondary" key={tag}>
                               {tag}
                           </span>)}
                       </td>
                       <td>{project.freelancer?.name || "-"}</td>
                       <td>{project.status === "OPEN" ? <span className="badge badge--success">باز</span> : <span className="badge badge--danger">بسته</span> }</td>
                       <td>
                           <div className="flex items-center gap-x-3">
                               <>
                                   <button onClick={()=>setIsEditOpen(true)} className="py-0.5 px-1">
                                       <TbPencilMinus className="w-5 h-5 text-primary-900"/>
                                   </button>
                                   <Modal  isOpen={isEditOpen} onClose={()=>setIsEditOpen(false)} title={project.title} >
                                           hi modal edit
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
                                       }/>
                                   </Modal>
                               </>
                           </div>
   
                       </td>
                       </Table.Row>
    );
}

export default ProjectRow;