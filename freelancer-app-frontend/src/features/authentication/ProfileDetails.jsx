import InfoField from "../../ui/InfoField";
import { toFarsiNumber } from "../../utils/CostomizePrice";

const ROLES={
    ADMIN:"ادمین",
    OWNER:"کارفرما",
    FREELANCER:"فریلنسر"
}
const ProfileDetails = ({user}) => {
    const{name,email,phoneNumber,role,biography} = user;
    console.log(user);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
            <InfoField title={"نام کاربر"} value={name}/>
            <InfoField title={"ایمیل کاربر"} value={email}/>
            <InfoField title={"شماره همراه"} value={toFarsiNumber(phoneNumber)}/>
            <InfoField title={"نقش کاربری"} value={ROLES[role]}/>
            <InfoField title={"بیوگرافی کاربر"} value={biography || "-"}/>
            
        </div>
    );
};

export default ProfileDetails;