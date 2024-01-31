import { useMutation } from "@tanstack/react-query";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/SendOTPForm";
import {useState} from "react"
import toast from "react-hot-toast";
import { getOtp } from "../services/authService";


function Auth() {
    const [step,setStep] = useState(1)
    const [phoneNumber,setPhoneNumber] = useState("")
    const {isPending:isSendingOtp,mutateAsync,data:otpResponse}=useMutation({
        mutationFn:getOtp,
    
    })
    
    //send phoneNumber to get new OTP token
        const  sendOtpHandler= async (e)=>{
            e.preventDefault();
            try {
                const data = await mutateAsync({phoneNumber});
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
                return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} onSendOtp={sendOtpHandler} isSendingOtp={isSendingOtp}/>
            case 2:
                return <CheckOTPForm phoneNumber={phoneNumber} onBack={()=>setStep(1)} onResendOtp={sendOtpHandler} otpResponse={otpResponse}/>
            default:
                return null
        }
    }

    return (<div className=" w-full mt-20 sm:max-w-sm">{renderStep()}</div>
    );
}

export default Auth;