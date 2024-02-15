
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";


const phoneRegEx = /^(\+98|0)?9\d{9}$/g
function SendOTPForm({register,errors,onSendOtp,isSendingOtp,handleSubmit}) {
    
    return (
        <div>
            <form className="space-y-5" onSubmit={handleSubmit(onSendOtp)}>
                <TextField name="phoneNumber"  label="شماره همراه"  dir="dir__ltr" type={"number"} register={register} validationSchema={{required:"شماره همراه برای ورود الزامی است",
            pattern:{
                value:phoneRegEx,
                message:"شماره همراه نامعتبر است"
            }}} errors={errors}/>
                {isSendingOtp ? <Loader/> : <button className="btn btn--primary w-full" type="submit">ارسال کد تایید</button>}
            </form>
        </div>
    );
}

export default SendOTPForm;