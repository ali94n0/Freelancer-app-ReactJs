
import { useNavigate } from 'react-router-dom';
import CompleteProfileForm from '../features/authentication/CompleteProfileForm';
import useUser from '../features/authentication/useUser';
import { useEffect } from 'react';

function CompleteProfile() {
    const{user}=useUser()
    const navigate=useNavigate()
    // check if user access to the auth route? 
    useEffect(()=>{
        if(user){
            navigate(`/${user.role.toLowerCase()}/profile`,{replace:true})
        }
        },[user,navigate])
    return (
        <CompleteProfileForm/>
    );
}

export default CompleteProfile;