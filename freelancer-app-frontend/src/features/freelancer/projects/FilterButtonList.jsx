import { useSearchParams } from "react-router-dom";


function FilterButtonList({options,filterField}) {

const[searchParams,setSearchParams]=useSearchParams();
const value = searchParams.get(filterField) || options.at(0).value

const clickHandler = (e)=>{

    searchParams.set(filterField,e.target.value)
    setSearchParams(searchParams)
}

    return (
            <div className="flex items-center gap-x-2">
                <span className="text-xs lg:text-sm text-secondary-600 ">وضعیت :</span>
        <div className=" flex p-1 items-center gap-x-1  bg-secondary-0 rounded-lg border border-secondary-300 ">

            {options.map(option=>{
                const isActive = option.value === value
                return (
                
            <button disabled={isActive} onClick={(e)=>clickHandler(e)}  className={`btn py-1 font-normal  transition-all duration-300 ease-out text-secondary-800 ${isActive && "!bg-primary-900 !text-white "}`} key={option.value} value={option.value}>{option.label}</button>
            )})}
        </div>
            </div>
    );
}

export default FilterButtonList;