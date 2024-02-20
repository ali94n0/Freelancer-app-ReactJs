import { useMenu } from "../context/MenuProvider";
import useUser from "../features/authentication/useUser";
import useOutsideClick from "../hooks/useOutsideClick";

import Loader from "./Loader";


const ROLES={
    ADMIN:"ادمین",
    OWNER:"کارفرما",
    FREELANCER:"فریلنسر"
}
function Sidebar({children}) {
    const{isLoading,user}=useUser()
    const{isOpen,onClose}=useMenu()
    const{modalRef}=useOutsideClick(onClose)

    return (
        <>
        <aside  ref={modalRef} className={`fixed top-11 right-0 transition-all duration-500 ease-out sm:hidden     bg-secondary-0 w-full border-t z-50  ${isOpen ? "block  " : "hidden translate-x-5 " }  `}>
            
            <div className="hidden sm:block">
            {isLoading ? <Loader width={50} height={30}/> : <div className="flex items-center border-b border-l border-secondary-100 py-3.5 px-6 text-primary-500 ">
                <span className="text-sm">پنل {ROLES[user?.role]}</span>
                </div>}
            </div>
            <div className="p-2">
            <ul className="flex flex-col gap-y-1 ">
            
            {children}
            
            
            </ul>
            </div>
        </aside>
        <aside   className="hidden sm:block transition-all duration-500 ease-out  sm:row-start-1 sm:row-span-2  min-h-screen bg-secondary-0 border-t" >
            
            <div className="hidden sm:block">
            {isLoading ? <Loader width={50} height={30}/> : <div className="flex items-center border-b border-l border-secondary-100 py-3.5 px-6 text-primary-500 ">
                <span className="text-sm">پنل {ROLES[user?.role]}</span>
                </div>}
            </div>
            <div className="p-2">
            <ul className="flex flex-col gap-y-1 ">
            
            {children}
            
            
            </ul>
            </div>
        </aside>
        
        </>
    );
}

export default Sidebar;