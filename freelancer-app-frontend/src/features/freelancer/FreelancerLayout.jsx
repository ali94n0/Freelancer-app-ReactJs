
import AppLayout from '../../ui/AppLayout';
import Sidebar from '../../ui/Sidebar';
import NavigationLink from '../../ui/NavigationLink';
import { HiClipboardList, HiCollection, HiHome } from 'react-icons/hi';

function FreelancerLayout() {
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
                <NavigationLink url={"proposals"}>
                <HiClipboardList />
                    درخواست ها
                </NavigationLink>
            </Sidebar>
        </AppLayout>
    );
}

export default FreelancerLayout;