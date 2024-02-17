import  { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import {useMutation} from "@tanstack/react-query"
import { checkOtp } from '../../services/authService';
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import Loader from '../../ui/Loader';
import BackBtn from '../../ui/BackBtn';
import { HiOutlinePencilAlt } from 'react-icons/hi';

// otp resend timer
const RESEND_TIME = 90;

const ROLES = {
    ADMIN:"admin",
    OWNER:"owner",
    FREELANCER:"freelancer"
}

function CheckOTPForm({phoneNumber,onBack,onResendOtp,otpResponse}) {
    const [otp, setOtp] = useState('');
    const[time,setTime] = useState(RESEND_TIME)
    const navigate = useNavigate()
  

    const{mutateAsync,isPending}=useMutation({
        mutationFn: checkOtp,
    })
    // resend timer fx
    useEffect(()=>{
        const timer = time > 0 && setInterval(() => {
            setTime(t=>t-1)
        }, 1000);
        return ()=>{
          if (timer)  clearInterval(timer)
        }
    },[time])
    // send otp to api fx
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const {user,message} = await mutateAsync({phoneNumber , otp});
            toast.success(message)

        //    navigate("/complete-user")
        if(!user.isActive){
            return navigate("/complete-profile")
        }
        if(user.status !== 2){
            navigate("/")
            toast('پروفایل شما در انتظار تایید است', {
                icon: '⏳',
              });
              return;
        }
        if(user?.role === ROLES[user?.role].toUpperCase()){
            return navigate(`/${ROLES[user?.role]}`)
        }
        } catch (error) {

            toast.error(error?.response?.data?.message)
        }
    }

   
    
    return (
        <div>
            
            <BackBtn onBack={onBack}/>
            <div className="w-full flex items-center  p-2 bg-secondary-50 rounded-lg gap-x-2">
                {otpResponse && <p className='text-secondary-500 text-sm md:text-base'>
                    {otpResponse?.message}
                    </p>}
                    <button className='text-xl text-primary-900 p-1' onClick={onBack}><HiOutlinePencilAlt className='w-6 h-6'/></button>
                
            </div>
            <form className='space-y-7' onSubmit={handleSubmit}>
                <p className='text-secondary-700 font-bold px-1 py-2 mt-4'>کد تایید را وارد کنید</p>
                <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle="!w-10 p-2 rounded-lg border border-primary-300 text-secondary-700 bg-secondary-100"
            />
            <div className={`my-2 w-full flex justify-center items-center   text-sm md:text-base rounded-lg ${time > 0 ? "bg-orange-50/70" : "bg-green-50/70" }`}>
                {time > 0 ? <p className='p-2 text-warning'>{time} ثانیه تا ارسال مجدد کد.</p> : <button className='btn text-green-500' onClick={(e)=>{
                    onResendOtp(e);
                    setTime(RESEND_TIME)
                }}>ارسال مجدد کد تایید</button>}
            </div>
            {isPending ? <Loader/> : <button className="btn btn--primary w-full" type="submit">تایید</button>}
            </form>

        </div>
    );
}

export default CheckOTPForm;