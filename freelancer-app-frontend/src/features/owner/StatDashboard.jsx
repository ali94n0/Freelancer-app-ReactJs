import { HiOutlineClipboardCheck, HiOutlineClipboardList, HiOutlineRefresh, HiOutlineViewGrid } from "react-icons/hi";

import StatBox from "../../ui/StatBox";

function StatDashboard({projects}) {
    

    const allProjects = projects.length;
    const openProjects = projects.filter(p =>p.status === "OPEN").length
    const allProposals = projects.reduce((acc,cur)=>cur.proposals.length + acc,0)
    const waitingProposals = projects.reduce((acc,cur)=> cur.proposals.map(p=>p.status === 1).length + acc ,0)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatBox label={"کل پروژه‌ها"} value={allProjects} color={"primary"} icon={<HiOutlineViewGrid className="w-12 h-12 "/>}/>
            <StatBox label={"پروژه‌های باز"} value={openProjects} color={"yellow"} icon={<HiOutlineClipboardCheck className="w-12 h-12 "/>}/>
            <StatBox label={"کل پروپوزال‌ها"} value={allProposals} color={"green"} icon={<HiOutlineClipboardList className="w-12 h-12 "/>}/>
            <StatBox label={"در انتظار تائید"} value={waitingProposals} color={"orange"} icon={<HiOutlineRefresh className="w-12 h-12 "/>}/>
            
        </div>
    );
}

export default StatDashboard;