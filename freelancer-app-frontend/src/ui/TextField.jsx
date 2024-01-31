
//render textInput
function TextField({name,value,label,onChange,required=true,dir="",type}) {
    return (
        <div>
                    <label htmlFor={name} className="block mb-3 p-1">{label}</label>
                    <input required={required} className={`textField__input ${dir}`} type={type} id={name} name={name}  value={value} onChange={onChange} autoComplete="off"/>
        </div>
    );
}

export default TextField;