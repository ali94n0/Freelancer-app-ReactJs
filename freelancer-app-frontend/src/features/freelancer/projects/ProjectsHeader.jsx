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
        <div className="flex flex-col sm:flex-row items-center sm:justify-between p-2 mb-6">
           <h1 className="text-secondary-900 font-bold lg:text-lg">لیست پروژه‌ها</h1>
           <div className="flex flex-col sm:flex-row  items-center mt-8 gap-y-2 sm:gap-y-0 sm:gap-x-2">
            <FilterButtonList options={statusOption} filterField={"status"}/>
            {isLoading ? <Loader width={50} height={30}/> : <FilterDropDown options={[{label:"همه",value:"ALL"},...formatCategories]} filterField={"category"}/>}
            <FilterDropDown options={sortOption} filterField={"sort"} />
            </div> 
        </div>
    );
}

export default ProjectsHeader;