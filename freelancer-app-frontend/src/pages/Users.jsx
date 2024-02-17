import UsersTable from "../features/admin/users/UsersTable";


const Users = () => {
    return (
        <div>
            <h1 className="text-secondary-800 font-bold md:text-lg p-2 mb-4">لیست کاربران</h1>
            <UsersTable/>
        </div>
    );
};

export default Users;