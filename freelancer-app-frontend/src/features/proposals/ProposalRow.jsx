import { HiOutlineExclamationCircle } from "react-icons/hi";
import Table from "../../ui/Table";
import truncateString from "../../ui/truncateString";
import { formatPrice, toFarsiNumber } from "../../utils/CostomizePrice";
import { useState } from "react";
import Modal from "../../ui/Modal";

const statusStyle = [
    {label:"رد شده",class:"badge--danger"},{label:"در انتظار تائید",class:"badge--secondary"},{label:"تائید شده",class:"badge--success"}
]
const descLength = 50

function ProposalRow({index,proposal}) {
    const[isOpenInfo,setIsOpenInfo] =useState(false)
    const{description,duration,price,status} = proposal;
    return (
        <Table.Row>
            <td>{toFarsiNumber(index+1)}</td>
            <td>
                <div className="flex gap-x-2 items-center">
                    <span>{truncateString(description,descLength)}</span>
                    {description.slice("").length > descLength && <button onClick={()=>setIsOpenInfo(true)}>
                    <HiOutlineExclamationCircle className="w-5 h-5 text-primary-800"/></button>
                    }
                    <Modal isOpen={isOpenInfo} onClose={()=>setIsOpenInfo(false)} title={"توضیحات کامل پروپوزال"} >
                        <div className="p-2">
                            <p className="text-secondary-600 text-wrap whitespace-break-spaces leading-6">{description}</p>
                        </div>
                    </Modal>
                </div>
            </td>
            <td>{toFarsiNumber(duration)} روز</td>
            <td>{formatPrice(price)}</td>
            <td>
                <span className={`badge ${statusStyle[status].class}`}>
                    {statusStyle[status].label}
                </span>
            </td>
            
        </Table.Row>
    );
}

export default ProposalRow;