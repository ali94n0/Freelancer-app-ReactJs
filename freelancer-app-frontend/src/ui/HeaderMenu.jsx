import {  HiOutlineUser, HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import useLogout from "../features/authentication/useLogout";
import Loader from "./Loader";
import DarkMode from "./DarkMode";


function HeaderMenu() {
    const {isPending,logout}=useLogout()
    return (
        <div>
            <ul className="flex items-center gap-x-3">
                <li className="flex">
                    <Link to={"owner"}>
                        <HiOutlineUser className="w-6 h-6 text-primary-900" />
                    </Link>
                </li>
                <li className="flex">
                   <DarkMode/>
                </li>
                <li className="flex">
                    {isPending ? <Loader width={40} height={20}/> : <button onClick={logout}>
                        <HiOutlineLogout className="w-6 h-6 text-error/60 hover:text-error rotate-180" />
                    </button>}
                </li>
            </ul>
        </div>
    );
}

export default HeaderMenu;