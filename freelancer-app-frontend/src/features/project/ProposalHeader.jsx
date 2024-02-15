import { useNavigate } from "react-router-dom";
import BackBtn from "../../ui/BackBtn"

function ProposalHeader({project}) {
    const navigate = useNavigate()
    return (
        <div className="mb-8">
            <BackBtn onBack={()=>navigate(-1)}/>
            <div className="p-2 bg-secondary-50 mx-2 rounded-lg flex flex-col gap-y-2">
            <h1 className="font-bold text-sm sm:text-base py-1 px-2">{project?.title}</h1>
            <p className="font-normal text-sm sm:text-base py-1 px-2 leading-6">{project?.description}</p>
            </div>
        </div>
    );
}

export default ProposalHeader;