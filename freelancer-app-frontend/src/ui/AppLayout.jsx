import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";


function AppLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr] grid-cols-[10rem_1fr]">
        
            <Header/>
            <Sidebar/>
            <div className="bg-secondary-100 overflow-y-auto p-8">
            <div className="mx-auto max-w-screen-lg flex flex-col gap-y-5">
            <Outlet/>
            </div>
            </div>
        </div>
    );
}

export default AppLayout;