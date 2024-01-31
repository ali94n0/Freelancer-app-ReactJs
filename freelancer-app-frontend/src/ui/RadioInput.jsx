
//render radioInput that use tailwind-forms-plugin
function RadioInput({lable,value,name,id,onChange,role}) {
    return (
        <div className="flex items-center gap-x-2 text-secondary-700 cursor-pointer">
                <input type="radio" className="form-radio w-4 h-4 rounded-md text-primary-900" value={value} name={name} id={id} onChange={onChange} checked={role === id}/>
                <label htmlFor={id}>{lable}</label>
            </div>
    );
}

export default RadioInput;