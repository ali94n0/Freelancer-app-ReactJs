import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function CompleteProfileForm() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[role,setRole] = useState("")
    const navigate = useNavigate()

    const {mutateAsync}=useMutation({
        mutationFn:completeProfile
    })
    // send user info to api fx
    const completeHandler = async(e)=>{
        e.preventDefault();
        try {
           const {user,message} = await mutateAsync({name,email,role});
           toast.success(message);
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
        if(user?.role === "OWNER"){
            return navigate("/owner")
        }
        if(user?.role === "FREELANCER"){
            return navigate("/freelancer")
        }
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="w-full flex justify-center" >
            <div className="w-full sm:max-w-sm pt-20">
            <form className="space-y-5" onSubmit={completeHandler}>
        <TextField type={"text"} label={"نام و نام‌خانوادگی"} name={"name"} value={name} onChange={(e)=>setName(e.target.value)} />
        <TextField type={"text"} label={"ایمیل"} name={"email"} value={email} onChange={(e)=>setEmail(e.target.value)} dir="dir__ltr"/>
        <div className="flex w-full gap-x-8 py-1 px-4 items-center justify-start">
            <RadioInput lable={"کارفرما"} name={"OWNER"} id={"OWNER"} value={"OWNER"} onChange={(e)=>setRole(e.target.value)} role={role}/>
            <RadioInput lable={"فریلنسر"} name={"FREELANCER"} id={"FREELANCER"} value={"FREELANCER"} onChange={(e)=>setRole(e.target.value)} role={role}/>
        </div>
            <button type="submit" className="btn btn--primary w-full">تایید</button>
            </form>
            </div>
        </div>
    );
}

export default CompleteProfileForm;