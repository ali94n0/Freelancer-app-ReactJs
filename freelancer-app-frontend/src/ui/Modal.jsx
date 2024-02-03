
import { HiOutlineX } from "react-icons/hi";


function Modal({isOpen,title,onClose,children}) {

    return (
        isOpen && (<div className="backdrop-blur-sm bg-secondary-400/50 fixed top-0 left-0 w-full h-screen ">
            <div className="w-[calc(100vw-3rem)] sm:max-w-sm max-h-[calc(100vh-1rem)] overflow-y-auto bg-secondary-0 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg shadow-lg shadow-secondary-200 ">
                <div className="flex item-center justify-between pb-1 px-1 border-b border-secondary-200 mb-5 " >
                    <p className="font-bold text-secondary-600 text-base">
                        {title}
                    </p>
                    <button className="text-error flex items-center mb-1 " onClick={onClose}>
                        <HiOutlineX className="w-5 h-5"/>
                    </button>
                </div>
                {children}
            </div>
        </div>)
    )
}

export default Modal;