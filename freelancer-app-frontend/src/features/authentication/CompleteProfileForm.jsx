
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form"

const regEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ //eslint-disable-line
function CompleteProfileForm() {
    const{register,formState:{errors},handleSubmit,getValues,watch}=useForm()


    const navigate = useNavigate()

    const {mutateAsync}=useMutation({
        mutationFn:completeProfile
    })
    // send user info to api fx
    const completeHandler = async()=>{

        try {
           const {user,message} = await mutateAsync(getValues());
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
            <div className="w-full sm:max-w-sm pt-20 ">
                <div className="flex justify-center mb-5">
                <h2 className="text-secondary-800 font-bold p-2 md:text-lg">تکمیل اطلاعات</h2>
                </div>
            <form className="space-y-5" onSubmit={handleSubmit(completeHandler)}>
        <TextField type={"text"} label={"نام و نام‌خانوادگی"} name={"name"} register={register} errors={errors} validationSchema={{
            required:"نام و نام‌خانوادگی الزامی است",
            minLength:5
        }}   />
        <TextField type={"text"} label={"ایمیل"} name={"email"} register={register} errors={errors} validationSchema={{
            required:"ایمیل الزامی است",
            pattern:{
                value:regEx,
                message:"ایمیل وارد شده نامعتبر است"
            }
        }} dir="dir__ltr"/>
        <div className="flex w-full gap-x-6 py-1 px-2 items-center justify-start">
            <RadioInput lable={"کارفرما"} name={"role"} value={"OWNER"} id={"OWNER"}  r register={register} checked={watch().role === "OWNER"}  validationSchema={{required:"انتخاب نقش کاربری الزامی است"}} errors={errors} />
            <RadioInput lable={"فریلنسر"} name={"role"} value={"FREELANCER"}  id={"FREELANCER"} register={register} checked={watch().role === "FREELANCER"} validationSchema={{required:"انتخاب نقش کاربری الزامی است"}}  errors={errors}/>
            {errors.role && <span className="text-xs text-error">{errors.role?.message}</span>}
        </div>
            <button type="submit" className="btn btn--primary w-full">تایید</button>
            </form>
            </div>
        </div>
    );
}

export default CompleteProfileForm;