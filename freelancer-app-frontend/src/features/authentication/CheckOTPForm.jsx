import  { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import {useMutation} from "@tanstack/react-query"
import { checkOtp } from '../../services/authService';
import {toast} from "react-hot-toast";
import {HiArrowRight} from "react-icons/hi"
import {CiEdit} from "react-icons/ci"
// import {useNavigate} from "react-router-dom"

const RESEND_TIME = 10;

function CheckOTPForm({phoneNumber,onBack,onResendOtp,otpResponse}) {
    const [otp, setOtp] = useState('');
    const[time,setTime] = useState(RESEND_TIME)
    // const navigate = useNavigate()

    const{mutateAsync}=useMutation({
        mutationFn: checkOtp,
    })

    useEffect(()=>{
        const timer = time > 0 && setInterval(() => {
            setTime(t=>t-1)
        }, 1000);
        return ()=>{
          if (timer)  clearInterval(timer)
        }
    },[time])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
           const {user,message} = await mutateAsync({phoneNumber , otp});
           toast.success(message)
        //    navigate("/complete-user")
        if(user.isActive){
        //
            if(user?.role === "OWNER"){
                //
            }if(user?.role === "FREELANCER"){
                //
            }
        }else{
        //
        }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message)
        }
    }

   
    
    return (
        <div>
            <button className='flex justify-center items-center text-red-400 border border-red-400 rounded-lg px-2 py-1 mb-5' onClick={onBack}>
               <HiArrowRight className='ml-2' /> 
               بازگشت
            </button>
            <div className="w-full flex items-center  p-2 bg-secondary-50 rounded-lg gap-x-2">
                {otpResponse && <p className='text-secondary-500 text-sm md:text-base'>
                    {otpResponse?.message}
                    </p>}
                    <button className='text-xl text-primary-900 p-1' onClick={onBack}><CiEdit /></button>
                
            </div>
            <form className='space-y-5' onSubmit={handleSubmit}>
                <p className='text-secondary-800 font-bold p-1'>کد تایید را وارد کنید</p>
                <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse gap-x-2 justify-center"
            inputStyle="!w-10 p-2 rounded-lg border border-primary-300 text-secondary-700 bg-secondary-100"
            />
            <div className={`my-2 w-full flex justify-center items-center   text-sm md:text-base rounded-lg ${time > 0 ? "bg-orange-50" : "bg-green-50" }`}>
                {time > 0 ? <p className='p-2 text-warning'>{time} ثانیه تا ارسال مجدد کد.</p> : <button className='btn text-green-500' onClick={(e)=>{
                    onResendOtp(e);
                    setTime(RESEND_TIME)
                }}>ارسال مجدد کد تایید</button>}
            </div>
            <button className='btn btn--primary w-full'>تایید</button>
            </form>

        </div>
    );
}

export default CheckOTPForm;