import { NavLink } from "react-router-dom";


function NavigationLink({url,children}) {
    const navLinkClass= "flex items-center gap-x-2  py-2 px-3 rounded-lg hover:bg-primary-100/50 hover:text-primary-900 transition-all duration-500 ease-out"
    return (
        <li>
            <NavLink to={url} className={({isActive})=> isActive ? `bg-primary-100/50 text-primary-900 ${navLinkClass} ` : `${navLinkClass} text-secondary-600 `}>
                        {children}
                    </NavLink>
            </li>
    );
}

export default NavigationLink;