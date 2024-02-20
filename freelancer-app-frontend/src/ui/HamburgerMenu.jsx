
import { HiMenu } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { useMenu } from "../context/MenuProvider";



const HamburgerMenu = () => {
    const{isOpen,onClick}=useMenu()

    return (
        <div className=" flex sm:hidden items-center " >
            <button onClick={onClick} className="flex items-center transition-all duration-500 ease-out">
                {isOpen ? <HiMinus className="w-7 h-7 text-error"/>  : <HiMenu className="w-7 h-7 text-secondary-800"/>}
            </button>
        </div>
    );
};

export default HamburgerMenu;