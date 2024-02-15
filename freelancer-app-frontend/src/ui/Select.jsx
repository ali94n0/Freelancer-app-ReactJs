
import { HiOutlineChevronDown } from "react-icons/hi";

function Select({value,onChange,options}) {
    return (
        <div className="flex flex-row items-center relative">
            <select value={value} onChange={onChange} className="textField__input py-2 px-3 pl-7 bg-secondary-0" >
                {options.map((option)=><option key={option.value} value={option.value}>{option.label}</option>)}
                
            </select>
            <HiOutlineChevronDown className="w-5 h-5 absolute top-3 left-2 text-secondary-900" />
        </div>
    );
}

export default Select;