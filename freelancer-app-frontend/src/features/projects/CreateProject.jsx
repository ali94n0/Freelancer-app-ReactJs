import {  useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import useCategories from "../../hooks/useCategories";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCreateNewProject from "./useCreateNewProject";
import Loader from "../../ui/Loader";
import useEditProject from "./useEditProject";


function CreateProject({onClose , projectToEdit = {}}) {
    const {_id:editId} = projectToEdit;

    const isEditId = Boolean(editId)
    const{title,description,budget,deadline,category,tags:editTags} = projectToEdit;
    let editValues = {}
    if(isEditId){
        editValues={
            title,
            description,
            budget,
            category:category._id,
        }
    }

    const[tags,setTags] = useState(editTags || [])
    const [date, setDate] = useState(new Date(deadline || ""))
    const {register,formState:{errors},handleSubmit,reset} = useForm({defaultValues:editValues })
    const {categories,isLoading}=useCategories()
    const {isCreating,createProject}=useCreateNewProject()
    const{isEditing,editProject}=useEditProject()



    const onSubmitNewProject =(data)=>{
        
        const newProject = {
            ...data,
            tags,
            deadline:new Date(date).toISOString()

        }
        if(isEditId){
            editProject({id:editId,data:newProject},{
                onSuccess:()=>{
                    onClose(),
                    reset()
                }
            })
        }else{
            createProject(newProject,{
                onSuccess:()=>{
                    onClose();
                    reset();
                }
            })
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitNewProject)}>
                <TextField
                label={"عنوان پروژه"}
                type={"text"}
                    name={"title"}
                    id={"title"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"عنوان پروژه الزامی است",
                        minLength:{
                            value:8,
                            message:"طول عنوان از حد مجاز کمتر است"
                        }
                    }}
                />
                <TextField
                label={"توضیحات پروژه"}
                type={"text"}
                    name={"description"}
                    id={"description"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"توضیحات پروژه الزامی است",
                        minLength:{
                            value:15,
                            message:"طول توضیحات از حد مجاز کمتر است"
                        }
                    }}
                />
                <TextField
                label={"بودجه پروژه"}
                type={"number"}
                    name={"budget"}
                    id={"budget"}
                    register={register}
                    errors={errors}
                    validationSchema={{
                        required:"بودجه پروژه الزامی است",
                        minLength:{
                            value:5,
                            message:"میزان بودجه از حد مجاز کمتر است"
                        }
                    }}
                />
                {isLoading ? <span className="text-primary-800 text-sm">برای انتخاب دسته بندی صبر کنید ...</span> : <RHFSelect
                register={register}
                errors={errors}
                label={"دسته بندی ها"}
                name={"category"}
                validationSchema={{
                    required:"انتخاب دسته بندی الزامی است"
                }}
                categories={categories}
                />}
                <div className="mt-2">
                    <label className="block mb-1 p-1 text-secondary-700">تگ ها</label>
                    <TagsInput
                    value={tags}
                    onChange={setTags}
                    name="tags"
                />
                </div>
                <DatePickerField date={date} handleChange={setDate} label={"ددلاین پروژه"}/>
                {isEditId ? <>
                    {isEditing ? <Loader width={50} height={30} /> : <button type="submit" className="btn btn--primary w-full mt-5 mb-2">بروزرسانی پروژه</button>}
                </> : <>
                {isCreating ? <Loader width={50} height={30} /> : <button type="submit" className="btn btn--primary w-full mt-5 mb-2">ایجاد پروژه</button>}
                </>}
                
                
            </form>
            
        </div>
    );
}

export default CreateProject;