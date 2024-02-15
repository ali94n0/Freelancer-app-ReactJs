import { HiOutlineDocumentAdd, HiOutlineExclamationCircle } from "react-icons/hi";
import Table from "../../../ui/Table";
import truncateString from "../../../ui/truncateString";
import { formatPrice, toFarsiNumber } from "../../../utils/CostomizePrice";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposal from "../../proposals/CreateProposal";

const titleLength = 30;
const statusStyle={
    "OPEN":{
        label:"باز",
        class:"badge--success"
    },
    "CLOSE":{
        label:"بسته",
        class:"badge--danger"
    }
}
// console.log(statusStyle[]);
function ProjectRow({project,index}) {
    const[isInfoOpen,setIsInfoOpen] = useState(false)
    const[isAddOpen,setIsAddOpen] = useState(false)
    const {_id,title,budget,deadline,status} = project;

    return (
        <Table.Row>
            <td>{toFarsiNumber(index+1)}</td>
            <td><div className="flex items-center gap-x-2">
                <span>{truncateString(title,titleLength)}</span>
                {title.slice("").length > titleLength && <button onClick={()=>setIsInfoOpen(true)}>
                    <HiOutlineExclamationCircle className="w-5 h-5 text-primary-800"/>
                    </button>}
                    <Modal title={"عنوان پروژه"} isOpen={isInfoOpen} onClose={()=>setIsInfoOpen(false)}>
                    <div className="p-2">
                            <p className="text-secondary-600 text-wrap whitespace-break-spaces leading-6">{title}</p>
                        </div>
                    </Modal>
                </div></td>
                <td>{formatPrice(budget)}</td>
                <td>{new Date(deadline).toLocaleDateString("fa-ir")}</td>
                <td>
                    <span className={`badge ${statusStyle[status].class}`}>{statusStyle[status].label}</span>
                </td>
                <td>
                    <div>
                        <button onClick={()=>setIsAddOpen(true)}>
                            <HiOutlineDocumentAdd className="w-5 h-5 text-primary-900"/>
                        </button>
                        <Modal title={`درخواست انجام پروژه ${truncateString(title,titleLength)}`} isOpen={isAddOpen} onClose={()=>setIsAddOpen(false)}>
                            <CreateProposal projectId={_id} onClose={()=>setIsAddOpen(false)}/>
                        </Modal>
                    </div>
                </td>
        </Table.Row>
    );
}

export default ProjectRow;