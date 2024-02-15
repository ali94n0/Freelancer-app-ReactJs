import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";


function ProposalsTable() {
    const {isLoading,proposals}=useProposals()
    if(isLoading)return<Loader/>
    return (
        <div>
            <Table>
                <Table.Header>
                    <th>#</th>
                    <th>توضیحات</th>
                    <th>زمان تحویل</th>
                    <th>هزینه (تومان)</th>
                    <th>وضعیت</th>
                    
                </Table.Header>
                <Table.Body>
                    {proposals.map((proposal,index)=><ProposalRow key={proposal._id} index={index} proposal={proposal}/>)}
                </Table.Body>
            </Table>
        </div>
    );
}

export default ProposalsTable;