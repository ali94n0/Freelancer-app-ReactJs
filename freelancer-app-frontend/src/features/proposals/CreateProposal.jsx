import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";
import Loader from "../../ui/Loader";


function CreateProposal({projectId,onClose}) {
    const{register,formState:{errors},handleSubmit,reset}=useForm()
    const{isCreating,createProposal}=useCreateProposal()

    const submitProposal = (data)=>{
        console.log({...data,projectId});

        createProposal({...data,projectId},{
            onSuccess: ()=>{
                onClose();
                reset();
    
            }
        })

    }
    return (
        <form onSubmit={handleSubmit(submitProposal)}>
            <TextField
                register={register}
                name={"description"}
                label={"توضیحات"}
                type={"text"}
                errors={errors}
                validationSchema={{
                    required:"پس تووضیحااات؟؟!!"
                }}
            />
            <TextField
                register={register}
                name={"duration"}
                label={"زمان تحویل"}
                type={"number"}
                errors={errors}
                validationSchema={{
                    required:"زمان تحویل پروژه الزامی است",
                    min:{
                        value:1,
                        message:"زمان تحویل پروژه از حد مجاز کمتر است"
                    },max:{
                        value:99,
                        message:"زمان تحویل پروژه از حد مجاز بیشتر است"
                    }
                }}
            />
            <TextField
                register={register}
                name={"price"}
                label={"هزینه"}
                type={"number"}
                errors={errors}
                validationSchema={{
                    required:"هزینه انجام پروژه الزامی است",
                    minLength: {
                        value:5,
                        message:"میزان هزینه انجام پروژه از حد مجاز کمتر است"
                    }
                }}
            />
            

            {isCreating ? <Loader width={50} height={30}/> : <button type="submit" className="btn btn--primary w-full mt-5 mb-2">ارسال درخواست</button>}
        </form> 
    );
}

export default CreateProposal;