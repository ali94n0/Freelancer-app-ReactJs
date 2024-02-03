import { HiCollection, HiHome } from "react-icons/hi";
import NavigationLink from "./NavigationLink";


function Sidebar() {
    return (
        <aside className="row-start-1 row-span-2 min-h-screen bg-secondary-0 px-2 py-4">
            <ul className="flex flex-col gap-y-1">
                <li>
                <NavigationLink url={"/owner/dashboard"}>
                    <HiHome/>
                    داشبورد
                    </NavigationLink>  
                </li>
                <li>
                <NavigationLink url={"/owner/projects"}>
                <HiCollection />
                    پروژه ها
                    </NavigationLink>  
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;