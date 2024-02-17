import ProposalsTable from "../features/proposals/ProposalsTable";


function ProposalsAdmin() {
    return (
        <div >
            <h1 className="text-secondary-800 font-bold md:text-lg p-2 mb-4">لیست پروپوزال ها</h1>
            <ProposalsTable/>
        </div>
    );
}

export default ProposalsAdmin;