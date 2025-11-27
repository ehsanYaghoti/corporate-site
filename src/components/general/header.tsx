import Link from "next/link";
import Logo from "./logo";
import Navbar from "./navbar";
import AuthLinks from "./authLinks";



const Header = () => {

    return (
        <header className="h-20 w-full px-16 py-2 flex items-center justify-between bg-netural text-textColor sticky " >
            <div className="flex items-center gap-20">
                <Logo />
                <Navbar />
            </div>
            <AuthLinks />
        </header>
    )
}

export default Header;
