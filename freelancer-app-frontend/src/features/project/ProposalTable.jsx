import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import Empty from "../../ui/Empty"



function ProposalTable({proposals}) {
    if(!proposals.length)return <Empty/>
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه (تومان)</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal, index)=><ProposalRow key={proposal._id} proposal={proposal} index={index}/>)}
            </Table.Body>
        </Table>
    )
}

export default ProposalTable;