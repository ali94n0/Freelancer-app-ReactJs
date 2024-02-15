
//render textInput
function TextField({name,label,dir="",type,register,errors,validationSchema}) {

    return (
        <div className="mb-2">
                    <label htmlFor={name}  className="block mb-1 p-1 text-secondary-700">
                        {label}{validationSchema.required && <span className="text-error px-1">*</span>}
                    </label>
                    <input  className={`textField__input block ${dir}`} type={type} id={name} name={name}  {...register(name,validationSchema)} autoComplete="off"/>
                    {errors[name] && <span className="text-error block text-xs mt-1 px-2">{errors[name]?.message}</span>}
        </div>
    );
}

export default TextField;