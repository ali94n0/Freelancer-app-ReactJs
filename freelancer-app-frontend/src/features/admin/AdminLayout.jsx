import { HiClipboardList, HiCollection, HiColorSwatch, HiHome, HiUsers } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import NavigationLink from "../../ui/NavigationLink";
import Sidebar from "../../ui/Sidebar";


function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
            <NavigationLink url={"dashboard"}>
                <HiHome/>
                    داشبورد
                </NavigationLink>
                <NavigationLink url={"users"}>
                    <HiUsers/>
                    کاربران
                </NavigationLink>
                <NavigationLink url={"projects"}>
                <HiCollection />
                    پروژه ها
                </NavigationLink>
                <NavigationLink url={"proposals"}>
                <HiClipboardList />
                    درخواست ها
                </NavigationLink>
                <NavigationLink url={"categories"}>
                <HiColorSwatch />
                    دسته بندی ها
                </NavigationLink>
            </Sidebar>
        </AppLayout>
    );
}

export default AdminLayout;