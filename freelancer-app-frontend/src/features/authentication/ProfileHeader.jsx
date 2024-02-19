import { useState } from "react";

import { HiOutlinePencilAlt } from "react-icons/hi";
import Modal from "../../ui/Modal";
import EditProfile from "./EditProfile";


const ProfileHeader = ({user}) => {
    const[isOpen,setIsOpen]=useState(false)
    return (
        <div className="flex items-center justify-between mb-5 p-2">
            <h1 className="text-secondary-800 font-bold md:text-lg p-2 mb-4">پروفایل کاربر</h1>
            <button onClick={()=>setIsOpen(true)} className="btn btn--primary flex text-sm font-normal lg:text-base items-center gap-x-2 text-secondary-0">
                <HiOutlinePencilAlt className="w-5 h-5"/>
                <span>ویرایش پروفایل</span>              
            </button>
            <Modal  isOpen={isOpen} onClose={()=>setIsOpen(false)} title={"ویرایش پروفایل"} >

            <EditProfile onClose={()=>setIsOpen(false)} user={user}/>
            </Modal>
        </div>
    );
};

export default ProfileHeader;