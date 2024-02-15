

import useOwnerProjects from '../projects/useOwnerProjects';
import Loader from '../../ui/Loader';
import DashboardHeader from './DashboardHeader';
import StatDashboard from './StatDashboard';

function DashboardLayout() {
    const {isLoading,projects}=useOwnerProjects()
    return (
        <div className="bg-secondary-100">
        <div >
        <DashboardHeader/>
        {isLoading ? <Loader/> : <StatDashboard projects={projects}/>}
        </div>
        </div>
    );
}

export default DashboardLayout;