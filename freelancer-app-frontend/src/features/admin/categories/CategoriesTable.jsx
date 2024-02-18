
import Table from '../../../ui/Table';
import CategoryRow from './CategoryRow';

const CategoriesTable = ({categories}) => {
    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان دسته‌بندی</th>
                <th>توضیحات دسته‌بندی</th>
                <th>عنوان انگیسی دسته‌بندی</th>
                <th>نوع دسته‌بندی</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {categories.map((category,index)=><CategoryRow key={category._id} index={index} category={category}/>)}
            </Table.Body>
        </Table>
    );
};

export default CategoriesTable;