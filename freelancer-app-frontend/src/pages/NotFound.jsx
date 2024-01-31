
import BackBtn from "../ui/BackBtn";
import useBack from "../hooks/useBack";


function NotFound() {
    const back = useBack()
    return (
        <div className=" w-full flex justify-center pt-20">
            <div className="space-y-5  sm:max-w-sm w-full p-2">
                <h1 className="text-secondary-700">صفحه‌ای که دنبالش بودید، پیدا نشد.</h1>
                <BackBtn onBack={back}/>
            </div>
        </div>
    );
}

export default NotFound;