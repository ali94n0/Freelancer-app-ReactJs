import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import NavigationLink from "../../ui/NavigationLink"


function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
            <NavigationLink url={"dashboard"}>
                    <HiHome/>
                    داشبورد
                    </NavigationLink>  
                
                <NavigationLink url={"projects"}>
                <HiCollection />
                    پروژه ها
                    </NavigationLink>  
            </Sidebar>
        </AppLayout>
    );
}

export default OwnerLayout;