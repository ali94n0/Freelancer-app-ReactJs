
//render radioInput that use tailwind-forms-plugin
function RadioInput({lable,name,id,register,checked,validationSchema,value}) {
    return (
        <div className="flex items-center gap-x-2 text-secondary-700 cursor-pointer">
                <input type="radio" value={value} className="form-radio w-4 h-4 rounded-md text-primary-900"  name={name} id={id}  checked={checked} {...register(name,
                    validationSchema
                )}/>
                <label htmlFor={id}>{lable}</label>

            </div>
    );
}

export default RadioInput;