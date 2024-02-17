import { HiOutlineClipboardList, HiOutlineCollection, HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";
import StatBox from "../../ui/StatBox";


const StatDashboard = ({users,categories,allProjects,proposals}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatBox label={"کاربران"} value={users.length} icon={<HiOutlineUsers className="w-12 h-12 "/>} color={"primary"}/>
            <StatBox label={"پروژه ها"} value={allProjects.length} icon={<HiOutlineCollection className="w-12 h-12 "/>} color={"orange"}/>
            <StatBox label={"درخواست ها"} value={proposals.length} icon={<HiOutlineClipboardList className="w-12 h-12 "/>} color={"green"}/>
            <StatBox label={"دسته بندی ها"} value={categories.length} icon={<HiOutlineViewGrid className="w-12 h-12 "/>} color={"yellow"}/>
        </div>
    );
};

export default StatDashboard;