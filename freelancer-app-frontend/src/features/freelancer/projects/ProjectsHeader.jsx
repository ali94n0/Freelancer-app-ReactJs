import useCategories from "../../../hooks/useCategories";
import FilterDropDown from "./FilterDropDown";
import Loader from "../../../ui/Loader";
import FilterButtonList from "./FilterButtonList";


const sortOption=[
    {
        value:"latest",
        label:"جدید ترین"
    },{
        value:"earliest",
        label:"قدیمی ترین"
    }
]

const statusOption = [
    {
        label:"همه",
    value:"ALL"
},
    {
        label:"باز",
        value:"OPEN",
    },
    {
        label:"بسته",
        value:"CLOSE"
    }
]

function ProjectsHeader() {
    const{isLoading,formatCategories}=useCategories()
    return (
        <div className="flex items-center justify-between p-2 mb-6">
           <h1 className="text-secondary-900 font-bold md:text-lg">لیست پروژه‌ها</h1>
           <div className="flex items-center mt-8 gap-x-4">
            <FilterButtonList options={statusOption} filterField={"status"}/>
            {isLoading ? <Loader width={50} height={30}/> : <FilterDropDown options={[{label:"همه",value:"ALL"},...formatCategories]} filterField={"category"}/>}
            <FilterDropDown options={sortOption} filterField={"sort"} />
            </div> 
        </div>
    );
}

export default ProjectsHeader;