


import { HiOutlineSun,HiOutlineMoon } from 'react-icons/hi';

import { useDarkMode } from '../context/DarkModeContext';



function DarkMode() {
    const{isDarkMode,toggleDarkMode}=useDarkMode()
    
     

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? <HiOutlineSun className="w-6 h-6 text-secondary-500" /> : <HiOutlineMoon className="w-6 h-6 text-secondary-500" />}
        </button>
    );
}

export default DarkMode;