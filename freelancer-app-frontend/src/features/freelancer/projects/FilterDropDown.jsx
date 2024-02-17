
import {useSearchParams} from "react-router-dom"
import Select from "../../../ui/Select"


function FilterDropDown({options,filterField}) {
    
    const[searchParams,setSearchParams]=useSearchParams()

    const value = searchParams.get(filterField) || "latest";

    const changeHandler = (e)=>{
        searchParams.set(filterField,e.target.value)
        setSearchParams(searchParams)
    }

    return (
        
            <Select value={value} onChange={(e)=>changeHandler(e)} options={options}/>
        
    );
}

export default FilterDropDown;