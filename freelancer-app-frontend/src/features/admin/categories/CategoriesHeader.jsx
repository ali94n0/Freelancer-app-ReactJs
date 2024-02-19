import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Modal from "../../../ui/Modal";
import CreateNewCat from "./CreateNewCat";


const CategoriesHeader = () => {
    const [isAddOpen,setIsAddOpen] = useState()
    return (
        <div className="flex items-center justify-between mb-5 p-2">
           <h2 className="text-secondary-700 font-bold md:text-lg">دسته‌بندی ها</h2>
           
           <button onClick={()=>setIsAddOpen(true)} className="btn btn--primary flex text-sm font-normal lg:text-base items-center gap-x-2 text-secondary-0">
                <HiOutlinePlus className="w-5 h-5"/>
                <span>دسته‌بندی جدید</span>              
            </button>
            <Modal
              isOpen={isAddOpen} onClose={()=>setIsAddOpen(false)} title={"اضافه کردن پروژه جدید"} >

                <CreateNewCat onClose={()=>setIsAddOpen(false)}/>
            </Modal>
           
        </div>
    );
};

export default CategoriesHeader;