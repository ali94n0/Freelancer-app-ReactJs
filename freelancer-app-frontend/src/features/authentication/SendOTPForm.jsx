
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";


function SendOTPForm({phoneNumber,setPhoneNumber,onSendOtp,isSendingOtp}) {
    
    return (
        <div>
            <form className="space-y-5" onSubmit={onSendOtp}>
                <TextField required={true} name="phoneNumber" value={phoneNumber} label="شماره همراه" onChange={(e)=>setPhoneNumber(e.target.value)} dir="dir__ltr" type={"number"}/>
                {isSendingOtp ? <Loader/> : <button className="btn btn--primary w-full" type="submit">ارسال کد تایید</button>}
            </form>
        </div>
    );
}

export default SendOTPForm;