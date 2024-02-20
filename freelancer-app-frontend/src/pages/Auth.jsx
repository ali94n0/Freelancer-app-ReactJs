import { useMutation } from "@tanstack/react-query";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";
import {useEffect, useState} from "react"
import toast from "react-hot-toast";
import { getOtp } from "../services/authService";
import { useForm } from "react-hook-form";
import useUser from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";


function Auth() {
    const navigate=useNavigate()
    const {user}=useUser()
    const [step,setStep] = useState(1)
    const {register,getValues,handleSubmit,formState:{errors}}=useForm()
    const {isPending:isSendingOtp,mutateAsync,data:otpResponse}=useMutation({
        mutationFn:getOtp,
    })

    // check if user access to the auth route? 
    useEffect(()=>{
        if(user){
            navigate(`/${user.role.toLowerCase()}/dashboard`,{replace:true})
        }
        },[user,navigate])
    
    //send phoneNumber to get new OTP token
        const  sendOtpHandler= async ()=>{

            try {
                const data = await mutateAsync(getValues());
                toast.success(data.message)
                setStep(2)

            } catch (error) {
                toast.error(error?.response?.data?.message)
            }
    
        }

        //render what step the user should be see on display
    const renderStep = ()=>{
        switch (step) {
            case 1:
                return <SendOTPForm setStep={setStep}   onSendOtp={sendOtpHandler} isSendingOtp={isSendingOtp} register={register} errors={errors} handleSubmit={handleSubmit}/>
            case 2:
                return <CheckOTPForm phoneNumber={getValues().phoneNumber} onBack={()=>setStep(1)} onResendOtp={sendOtpHandler} otpResponse={otpResponse}/>
            default:
                return null
        }
    }

    return (
    <div className="w-full h-screen bg-secondary-0">
        <div className="md:container xl:max-w-screen-xl flex justify-center ">

<div className=" w-full mt-20 py-5 sm:max-w-sm">{renderStep()}</div>
</div>
    </div>
    );
}

export default Auth;