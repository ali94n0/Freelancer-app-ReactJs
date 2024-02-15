import ProposalsTable from "../features/proposals/ProposalsTable";


function Proposals() {
    return (
        <div >
            <h1 className="text-secondary-800 font-bold md:text-lg p-2 mb-4">پروپوزال های من</h1>
            <ProposalsTable/>
        </div>
    );
}

export default Proposals;