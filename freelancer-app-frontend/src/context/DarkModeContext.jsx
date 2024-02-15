import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const darkModeContext =createContext()

export function DarkModeProvider({children}){

    const[isDarkMode,setIsDarkMode]=useLocalStorageState("isDarkMode",
    window.matchMedia('(prefers-color-scheme: dark)').matches)

    const toggleDarkMode = ()=>{
        setIsDarkMode(prev=>!prev)
    }

    // change dark/light mode with device status
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change",(e)=>{
        e.matches ? setIsDarkMode(true) : setIsDarkMode(false);
    })


    useEffect(()=>{
        if(isDarkMode){
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode")
        }else{
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode")
        }
     },[isDarkMode])


    return <darkModeContext.Provider value={{isDarkMode,toggleDarkMode}}>
        {children}
    </darkModeContext.Provider>
}

export function useDarkMode(){
    const context=useContext(darkModeContext)

    if(context === undefined)throw new Error("DarkModeContext was used outside of DarkModeProvider");

    return context;
}