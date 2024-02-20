import UserInfo from "../features/authentication/UserInfo";
import useUser from "../features/authentication/useUser";
import HamburgerMenu from "./HamburgerMenu";
import HeaderMenu from "./HeaderMenu";


function Header() {
    
    const {isLoading,user} = useUser()


    return (
        <header className="bg-secondary-0 fixed top-0 right-0 left-0 sm:sticky z-12">
            <div className={`flex relative items-center justify-end  justify-between w-full gap-x-5 max-w-screen-lg container p-2 ${isLoading ? "blur-sm opacity-70" :""} `}>
                <HamburgerMenu/>
                <UserInfo user={user}/>
                <HeaderMenu/>
            </div>
        </header>
    );
}

export default Header;