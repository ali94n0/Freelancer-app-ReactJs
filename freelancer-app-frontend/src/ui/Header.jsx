import useUser from "../features/authentication/useUser";


function Header() {
    const {data} = useUser()

    return (
        <header className="bg-secondary-0">
            {data?.user?.name}
        </header>
    );
}

export default Header;