import CategoriesHeader from "../features/admin/categories/CategoriesHeader";
import CategoriesTable from "../features/admin/categories/CategoriesTable";
import useCategories from "../hooks/useCategories";
import Loader from "../ui/Loader";


const Categories = () => {
    const{isLoading,rawCategories}=useCategories()
    return (
        <div>

        <CategoriesHeader/>
        {isLoading ? <Loader/>  : <CategoriesTable categories={rawCategories}/>}
        </div>
    );
};

export default Categories;