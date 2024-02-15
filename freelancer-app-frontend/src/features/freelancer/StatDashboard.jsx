import { HiOutlineClipboardCheck, HiOutlineCurrencyDollar, HiOutlineRefresh, HiOutlineViewGrid } from "react-icons/hi";
import StatBox from "../../ui/StatBox";
import { formatPrice } from "../../utils/CostomizePrice";



function StatDashboard({proposals}) {
    const allproposals = proposals?.length;
    const acceptedProposals = proposals.filter(p=>p.status === 2);
    const waitingProposals = proposals.filter(p=>p.status === 1).length;
    const balance =acceptedProposals.reduce((acc,cur)=>cur.price + acc,0)


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatBox label={"کل درخواست‌ها"} value={allproposals} icon={<HiOutlineViewGrid className="w-12 h-12 "/>} color={"primary"}/>
            <StatBox label={"تایید شده"} value={acceptedProposals.length} icon={<HiOutlineClipboardCheck className="w-12 h-12 "/>} color={"orange"}/>
            <StatBox label={"در انتظار تایید"} value={waitingProposals} icon={<HiOutlineRefresh className="w-12 h-12 "/>} color={"green"}/>
            <StatBox label={"کیف پول"} value={`${formatPrice(balance)} تومان`} icon={<HiOutlineCurrencyDollar className="w-12 h-12 "/>} color={"yellow"}/>
        </div>
    );
}

export default StatDashboard;