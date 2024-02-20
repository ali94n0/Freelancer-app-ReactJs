

import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";


function Modal({isOpen,title,onClose,children}) {
    const {modalRef} = useOutsideClick(onClose,true)

    return (
        isOpen && (<div className="backdrop-blur-sm bg-secondary-400/50 fixed top-0 left-0 w-full h-screen z-10">
            <div ref={modalRef}  className="w-[calc(100vw-3rem)] sm:max-w-md lg:max-w-lg max-h-[calc(100vh-1rem)] overflow-y-auto bg-secondary-0 flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-lg shadow-lg shadow-secondary-200 z-50 mt-12 ">
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