"use client";

import Logo from "./logo";
import Navbar from "./navbar";
import AuthLinks from "./authLinks";
import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobieMenu";



const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="h-20 w-full px-4 lg:px-16 py-2 flex items-center justify-between bg-netural text-textColor sticky top-0 z-50" >
                <div className="flex items-center gap-20">
                    <Logo />
                    <Navbar mobileMenu={false} />
                </div>
                <AuthLinks mobileMenu={false} />
                <button type="button" className="lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)} >
                    <Menu />
                </button>
            </header>
            <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
        </>

    )
}

export default Header;
