

function RHFSelect({label,name,register,errors={},validationSchema,categories}) {

    return (
        <div>
            <label className="block mb-1 p-1 text-secondary-700">{label}{validationSchema.required && <span className="text-error px-1">*</span>}</label>
            <select {...register(name,validationSchema)} name={name} className="textField__input ">
                {categories.map(item=> <option className="m-0" key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            {errors[name] && <span className="text-error block text-xs mt-1 px-2">{errors[name]?.message}</span>}
        </div>
    );
}

export default RHFSelect;