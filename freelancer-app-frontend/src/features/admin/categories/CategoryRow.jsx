import { HiOutlineExclamationCircle, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import Table from "../../../ui/Table";
import truncateString from "../../../ui/truncateString";
import { toFarsiNumber } from "../../../utils/CostomizePrice";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useRemoveCategory from "./useRemoveCategory";
import CreateNewCat from "./CreateNewCat";


const descLength = 35
const CategoryRow = ({index,category}) => {
    const[isInfoOpen,setIsInfoOpen]=useState(false)
    const[isDeleteOpen,setIsDeleteOpen]= useState(false)
    const[isEditOpen,setIsEditOpen]=useState(false)
    const{isPending:isDeleting,removeCategory}=useRemoveCategory()

    const{title,description,englishTitle,type,_id} = category;

    return (
        <Table.Row>
            <td>{toFarsiNumber(index+1)}</td>
            <td>{title}</td>
            <td><div className="flex items-center gap-x-2 ">
                <span>{truncateString(description,descLength)}</span>
                {description.slice("").length > descLength && <button onClick={()=>setIsInfoOpen(true)}>
                <HiOutlineExclamationCircle className="w-5 h-5 text-primary-800"/>
                </button>}
                <Modal isOpen={isInfoOpen} onClose={()=>setIsInfoOpen(false)} title={"توضیحات دسته‌بندی"} >
                <div className="p-2">
                            <p className="text-secondary-600 text-wrap whitespace-break-spaces leading-6">{description}</p>
                        </div>
                </Modal>
                
                </div></td>
            <td>{englishTitle}</td>
            <td>{type}</td>
            <td>
                <div className="flex items-center justify-center gap-x-3">
                <>
                    <button onClick={()=>setIsEditOpen(true)}>
                        <HiOutlinePencilAlt className="w-5 h-5 text-primary-900"/>
                    </button>
                    <Modal title={title} isOpen={isEditOpen} onClose={()=>setIsEditOpen(false)}>
                        <CreateNewCat onClose={()=>setIsEditOpen(false)} categoryToEdit={category}/>
                    </Modal>
                    </>
                    <><button onClick={()=>setIsDeleteOpen(true)}>
                        <HiOutlineTrash className="w-5 h-5 text-error"/>
                    </button>
                    <Modal title={title} isOpen={isDeleteOpen} onClose={()=>setIsDeleteOpen(false)}>
                        <ConfirmDelete resourceName={title} onClose={()=>setIsDeleteOpen(false)} onConfirm={()=>removeCategory({id:_id},{onSuccess: ()=>setIsDeleteOpen(false)})} disabled={isDeleting}/>
                    </Modal></>
                    
                </div>
            </td>
        </Table.Row>
    );
};

export default CategoryRow;