import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import RHFSelect from "../../../ui/RHFSelect";
import useCreateCategory from "./useCreateCategory";
import Loader from "../../../ui/Loader";
import useEditCategory from "./useEditCategory";

const categoriesType=[
    {value:"project",label:"پروژه ها"},
    {value:"comment",label:"نظرات"},
    {value:"post",label:"پست ها"},
    {value:"ticket",label:"بن ها"}

]
const CreateNewCat = ({onClose,categoryToEdit={}}) => {
    const{_id:editId} = categoryToEdit;
    const isEdit = Boolean(editId);

    let editValue = {};
    const{title,description,englishTitle,type} = categoryToEdit;
    if(isEdit){
        editValue={
            title,description,englishTitle,type
        };
    }
console.log(editValue);
    const{register,handleSubmit,formState:{errors},reset}=useForm({defaultValues:editValue})
    const{isPending:isCreating,createCategory}=useCreateCategory()
    const{isPending:isEditing,editCategory}=useEditCategory()


    const submitHandler=(data)=>{
        if(isEdit){
            editCategory({id:editId,data},{
                onSuccess:()=>{
                    onClose()
                }
            })
        }else{
            createCategory(data,{
                onSuccess:()=>{
                    onClose()
                    reset()
                }
            })
        }
        
    }
    return (
        <div>
            <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(submitHandler)}>
            <TextField
                label={"عنوان دسته‌بندی"}
                type={"text"}
                    name={"title"}
                    id={"title"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"عنوان دسته‌بندی الزامی است",
                        minLength:{
                            value:5,
                            message:"طول عنوان از حد مجاز کمتر است"
                        }
                    }}
                />
                <TextField
                label={"توضیحات دسته‌بندی"}
                type={"text"}
                    name={"description"}
                    id={"description"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"توضیحات دسته‌بندی الزامی است",
                        minLength:{
                            value:10,
                            message:"طول توضیحات از حد مجاز کمتر است"
                        }
                    }}
                />
                <TextField
                label={"عنوان انگلیسی"}
                type={"text"}
                    name={"englishTitle"}
                    id={"englishTitle"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"عنوان انگلیسی دسته‌بندی الزامی است",
                        minLength:{
                            value:5,
                            message:"طول عنوان انگلیسی از حد مجاز کمتر است"
                        },
                        pattern:{
                            value:/^[a-z0-9 ]+$/gi,
                            message:"عنوان انگلیسی باید به زبان انگلیسی باشد"
                        }
                    }}
                    />
                    <RHFSelect register={register} errors={errors} label={"نوع دسته‌بندی"} categories={categoriesType} name={"type"} validationSchema={{required:"نوع دسته‌بندی الزامی است",}}/>
                {isCreating || isEditing ? <Loader width={50} height={30}/> : <button type="submit" className="btn btn--primary w-full mb-2 mt-4">{isEdit ? "ویرایش" : "تایید" }</button>}
            </form>
        </div>
    );
};

export default CreateNewCat;