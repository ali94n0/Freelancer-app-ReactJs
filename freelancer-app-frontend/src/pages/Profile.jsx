
import ProfileDetails from '../features/authentication/ProfileDetails';
import ProfileHeader from '../features/authentication/ProfileHeader';
import useUser from '../features/authentication/useUser';
import Loader from '../ui/Loader';

const Profile = () => {
    const {isLoading,user}=useUser()
    if(isLoading)return <Loader/>
    return (
        <div>
             <ProfileHeader user={user}/>
            <ProfileDetails user={user}/>
        </div>

    );
};

export default Profile;