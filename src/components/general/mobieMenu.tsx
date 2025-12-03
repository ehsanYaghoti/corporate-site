"use client";

import { Dispatch, SetStateAction } from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import AuthLinks from "./authLinks";
import { X } from "lucide-react";

const MobileMenu = ({showMobileMenu , setShowMobileMenu} : {showMobileMenu : boolean , setShowMobileMenu: Dispatch<SetStateAction<boolean>>}) => {

    return (
        <>
            <div className={
                ` ${showMobileMenu ? "translate-x-0" : "-translate-x-full"} transition-all ease-out duration-500
                    h-screen w-64 bg-white  fixed z-60  left-0 overflow-hidden
                     px-4 py-3`
            }>
                <div className="flex w-full relative h-0" >
                    <button type="button" className=" absolute right-0 top-0" onClick={() => setShowMobileMenu(false)} >
                        <X size={16} />
                    </button>
                </div>
                <div className="flex flex-col items-start gap-8 divide-y divide-black/20 w-full">
                    <div className="py-2 pb-6 w-full">
                        <Logo />
                    </div>
                    <div className="flex flex-col items-start gap-8" >
                        <AuthLinks mobileMenu={true} />
                        <Navbar mobileMenu={true} />
                    </div>
                </div>
            </div>
            <div className={`${showMobileMenu ? "opacity-100 z-50" : " opacity-0 -z-50 "} transition-opacity duration-600 ease-out  fixed w-screen h-screen bg-black/50`} onClick={() => setShowMobileMenu(false)} ></div>
        </>
    )
}


export default MobileMenu;