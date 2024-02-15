import UserInfo from "../features/authentication/UserInfo";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";


function Header() {
    const {isLoading,user} = useUser()


    return (
        <header className="bg-secondary-0">
            <div className={`flex items-center justify-between w-full gap-x-5 max-w-screen-lg container p-2 ${isLoading ? "blur-sm opacity-70" :""} `}>
                <UserInfo user={user}/>
                <HeaderMenu/>
            </div>
        </header>
    );
}

export default Header;