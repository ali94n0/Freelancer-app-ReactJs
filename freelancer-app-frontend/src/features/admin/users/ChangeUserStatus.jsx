import { useForm } from "react-hook-form";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import Loader from "../../../ui/Loader";

const userStatus=[
    {label:"رد شده",
value:0},{
    label:"در انتظار تایید",
    value:1
},{label:"تایید شده",
value:2}
]
const ChangeUserStatus = ({user,onClose}) => {
    const{register,formState:{errors},handleSubmit,reset} = useForm({defaultValues:{status:user?.status}})

    const {isPending,changeUserStatus}=useChangeUserStatus()

    const changeStatusHandler=(data)=>{
        changeUserStatus({id:user._id,data},{
            onSuccess:()=>{
                onClose()
                reset()
            }
        })
    }
    return (
        <form onSubmit={handleSubmit(changeStatusHandler)}>
            <RHFSelect
            label={"وضعیت کاربر"}
            errors={errors}
            register={register}
            name={"status"}
            validationSchema={{
                required:"تعیین وضعیت کاربر الزامی است"
            }}
            categories={userStatus}
            />
            {isPending ? <Loader width={50} height={30}/> : <button type="submit" className="btn btn--primary w-full mt-4 mb-2" >تائید</button>}
        </form>
    );
};

export default ChangeUserStatus;