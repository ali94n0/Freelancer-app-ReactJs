import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import { toFarsiNumber } from "../../../utils/CostomizePrice";
import { HiOutlineCog } from "react-icons/hi";
import ChangeUserStatus from "./ChangeUserStatus";

const ROLES={
    ADMIN:"ادمین",
    OWNER:"کارفرما",
    FREELANCER:"فریلنسر",
    USER:"کاربر"
}
const statusStyle=[
    {
        label:"رد شده",
        class:"badge--danger"
    },{
        label:"در انتظار تایید",
        class:"badge--secondary"
    },{
        label:"تایید شده",
        class:"badge--success"
    }
]
const UserRow = ({user,index}) => {
    const [isOpen,setIsOpen]=useState(false)
    const {status} = user;
    return (
        <Table.Row>
            <td>{toFarsiNumber(index+1)}</td>
            <td>{user.name ? user.name : "-" }</td>
            <td>{user.email ? user.email : "-"}</td>
            <td>{toFarsiNumber(user.phoneNumber)}</td>
            <td>{ROLES[user?.role]}</td>
            <td><span className={`badge ${statusStyle[status].class}`}>
            {statusStyle[status].label}
                </span></td>
                <td>
                    <div className="flex justify-center items-center"><button className="flex items-center justify-center" onClick={()=>setIsOpen(true)}>
                        <HiOutlineCog className="w-5 h-5 text-primary-900"/>
                    </button>
                    </div>
                    <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)} title={"تغییر وضعیت کاربر"}>
                        <ChangeUserStatus user={user} onClose={()=>setIsOpen(false)}/>
                    </Modal>
                </td>
        </Table.Row>
    );
};

export default UserRow;