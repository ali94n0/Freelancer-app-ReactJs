import useUser from "../features/authentication/useUser";
import Loader from "./Loader";


const ROLES={
    ADMIN:"ادمین",
    OWNER:"کارفرما",
    FREELANCER:"فریلنسر"
}
function Sidebar({children}) {
    const{isLoading,user}=useUser()
    return (
        <aside className="row-start-1 row-span-2 min-h-screen bg-secondary-0 ">
            {isLoading ? <Loader width={50} height={30}/> : <div className="flex items-center border-b border-l border-secondary-100 py-3.5 px-6 text-primary-500 ">
                <span className="text-sm">پنل {ROLES[user?.role]}</span>
                </div>}
            <div className="p-2">
            <ul className="flex flex-col gap-y-1 ">
            
            {children}
            
            
            </ul>
            </div>
        </aside>
    );
}

export default Sidebar;