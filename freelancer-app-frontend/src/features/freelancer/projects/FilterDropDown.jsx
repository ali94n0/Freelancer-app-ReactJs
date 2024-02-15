
import {useSearchParams} from "react-router-dom"
import Select from "../../../ui/Select"


function FilterDropDown({options,filterField}) {
    
    const[searchParams,setSearchParams]=useSearchParams()

    const value = searchParams.get(filterField) || ""

    const changeHandler = (e)=>{
        searchParams.set(filterField,e.target.value)
        setSearchParams(searchParams)
    }

    return (
        
            <Select value={value} onChange={changeHandler} options={options}/>
        
    );
}

export default FilterDropDown;