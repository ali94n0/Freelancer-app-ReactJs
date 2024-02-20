import { createContext, useContext, useState } from "react";


const menuContext =createContext()

export const MenuProvider = ({children}) => {
    const[isOpen,setIsOpen]=useState(false)

    const onClick=()=>{
        setIsOpen(prev=>!prev)

    }
    const onClose=()=>{
        setIsOpen(false)
    }

    return (
        <menuContext.Provider value={{isOpen,onClick,onClose}}>
            {children}
        </menuContext.Provider>
    );
};


export const useMenu=()=>{
     const context =useContext(menuContext)
     if(context === undefined)throw new Error("MenuContext was used outside of MenuProvider");
     return context
}