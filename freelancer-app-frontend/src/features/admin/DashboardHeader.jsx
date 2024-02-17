import useUser from "../authentication/useUser";


function DashboardHeader() {
    const{user}=useUser()
    return (
        <div className="flex flex-col mb-8">
            <p className="text-secondary-600">😍 {user.name} عزیز، به فریلنسر اپ خوش امدید.</p>
            <h3 className="font-bold md:text-xl text-secondary-900 mt-8">امار کلی :</h3>
            <p className="text-secondary-500 my-2">در یک نگاه خلاصه‌ای از امار فعالیت های خود را ببینید </p>
        </div>
    );
}

export default DashboardHeader;