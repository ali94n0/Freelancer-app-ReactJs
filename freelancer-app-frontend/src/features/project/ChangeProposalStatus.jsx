import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import Loader from "../../ui/Loader";

const statusOptions=[{
    label:"رد شده",
    value:0
},
{
    label:"در انتظار تائید",
    value:1
},
{
    label:"تائید شده",
    value:2
}]
function ChangeProposalStatus({status,description,proposalId,onClose,projectId}) {

    const{register,formState:{errors},handleSubmit}=useForm({defaultValues:{status}})
    const{isChanging,changeStatus}=useChangeProposalStatus()

    const changeStatusHandler=(data)=>{
        changeStatus({...data,projectId,proposalId},{
            onSuccess:()=>{
                onClose()
            }
        })
    }

    return (
        <div className="flex flex-col">
            <div className="flex flex-col  p-2 gap-y-3 border-b border-secondary-100  mb-5 ">
                <h3 className="font-bold">توضیحات پروپوزال:</h3>
                <p className="leading-6 text-wrap whitespace-break-spaces">{description}</p>
            </div>
            <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(changeStatusHandler)}>
            <RHFSelect label={"وضعیت پروپوزال"} categories={statusOptions} name={"status"} register={register} errors={errors} validationSchema={{
                required:"تعیین وضعیت پروپزال الزامی است"
            }} />
            {isChanging ? <Loader width={50} height={30}/> : <button type="submit" className="btn btn--primary w-full mb-2">تغییر وضعیت</button>}
            </form>
        </div>
    );
}

export default ChangeProposalStatus;