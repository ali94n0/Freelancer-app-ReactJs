
import { HiOutlineLightningBolt } from "react-icons/hi";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import truncateString from "../../ui/truncateString";
import { formatPrice, toFarsiNumber } from "../../utils/CostomizePrice";
import { useState } from "react";
import ChangeProposalStatus from "./ChangeProposalStatus";
import { useParams } from "react-router-dom";

const statusStyles =[
    {
        label:"رد شده",
        className:"badge--danger"
    },{
        label:"در انتظار تائید",
        className:"badge--secondary"
    },{
        label:"تائید شده",
        className:"badge--success"
    }
]

function ProposalRow({proposal,index}) {
    const[isActionOpen,setIsActionOpen]=useState(false)
    const {id}=useParams()

    return (
        <Table.Row>
            <td>{toFarsiNumber(index + 1)}</td>
            <td >{truncateString(proposal.description,50)}</td>
            <td>{toFarsiNumber(proposal.duration)} روز</td>
            <td>{formatPrice(proposal.price)}</td>
            <td>
                <span className={`badge  ${statusStyles[proposal.status].className}`}>
                    {statusStyles[proposal.status].label}
                </span>
            </td>
            <td>
                <div className="flex justify-center">
                <button className="text-primary-800" onClick={()=>setIsActionOpen(true)}>
                    <HiOutlineLightningBolt className="w-5 h-5"/>
                </button>
                <Modal onClose={()=>setIsActionOpen(false)} isOpen={isActionOpen} title={truncateString(proposal.description,40)} >
                    <ChangeProposalStatus projectId={id} status={proposal?.status} description={proposal?.description} proposalId={proposal._id} onClose={()=>setIsActionOpen(false)}/>
                </Modal>
                </div>
            </td>
        </Table.Row>
    );
}

export default ProposalRow;