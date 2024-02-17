import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import UserRow from "./UserRow";
import useUsers from "./useUsers";


const UsersTable = () => {
    const{isLoading,users}=useUsers()
    if(isLoading)return<Loader/>;
    return ( 
        <Table>
            <Table.Header>
                <th>#</th>
                <th>نام کاربر</th>
                <th>ایمیل</th>
                <th>شماره همراه</th>
                <th>نقش کاربر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {users.map((user,index)=><UserRow key={user._id} user={user} index={index}/>)}
            </Table.Body>

        </Table>
    );
};

export default UsersTable;