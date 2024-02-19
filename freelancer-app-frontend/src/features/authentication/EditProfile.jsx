import {useForm} from "react-hook-form"
import TextField from "../../ui/TextField"
import useUpdateUser from "./useUpdateUser";
import Loader from "../../ui/Loader";



const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ //eslint-disable-line
const phoneRegEx = /^(\+98|0)?9\d{9}$/g
const EditProfile = ({onClose,user}) => {
    const{name,email,phoneNumber,biography} = user;
    const {register,formState:{errors},handleSubmit} =useForm({defaultValues:{name,email,phoneNumber,biography}})
    const{isPending,updateUser}=useUpdateUser()

const editHandler = (data)=>{
    updateUser(data,{
        onSuccess:()=>{
            onClose()
        }
    })
}

    return (
        <form onSubmit={handleSubmit(editHandler)}>
            <TextField register={register} name={"name"} errors={errors} label={"نام کاربری"} validationSchema={{
                required:"نام کاربری الزامی است"
            }}/>
            <TextField register={register} name={"email"} errors={errors} label={"ایمیل کاربر"} validationSchema={{
                required:"ایمیل کاربر الزامی است",
                pattern:{
                    value:emailRegEx,
                    message:"ایمیل وارد شده نامعتبر است"
                }
            }} dir="dir__ltr"/>
            <TextField register={register} name={"phoneNumber"} errors={errors} label={"شماره همراه"} validationSchema={{
                required:"شماره همراه کاربر الزامی است",
                pattern:{
                    value:phoneRegEx,
                    message:"شماره همراه نامعتبر است"
                }
            }} dir="dir__ltr"/>
            <TextField register={register} name={"biography"} errors={errors} label={"بیوگرافی"} />
            
            
            {isPending ? <Loader width={50} height={30}/> : <button type='submit' className='btn btn--primary w-full mt-4 mb-2'>ویرایش</button>}
        </form>
    );
};

export default EditProfile;