

function UserInfo({user}) {
    return (
        <div className="flex items-center gap-x-2">
            <img src="/user.jpg" alt="user-account" className="flex items-center w-8 h-8 border-2 border-primary-400 rounded-full object-cover object-center"/>
            <p className="text-secondary-700 ">{user?.name}</p>
        </div>
    );
}

export default UserInfo;