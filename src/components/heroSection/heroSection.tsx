'use client';

import { useRef, useState } from "react";





const HeroSection = () => {

    const [isVisible , setIsVisible] = useState<boolean>(false);

    const ref = useRef(null);



    return (
        <div className="w-full flex items-start px-10 text-textColor justify-center h-screen bg-netural " >
            <div className="flex flex-col items-start justify-start gap-6 w-1/2 p-8 " >
                <h1 className="text-5xl font-normal font-str w-full leading-[75px]" >
                    <span className=" font-extrabold flex" >Get paid early</span> save automatically <br /> all yout pay.
                </h1>
                <p className=" text-sm" >
                    Supports small businesses with simple invoicing, <br /> powerful integrations, and cash flow management tools.
                </p>

                <label className="flex gap-2 h-14 border border-black/20 min-w-[400px] p-px bg-white rounded-xl">
                    <input type="text"  className="  flex grow  border-black/20 px-6  py-1 rounded-[20px] outline-none bg-white" placeholder="Your bussiness email" />
                    <button type="submit" className="bg-primary text-sm text-white flex items-center px-6  gap-2 rounded-xl border justify-center cursor-pointer  " >
                        Get Started
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                    </button>
                </label>

                <div className="flex items-center justify-between text-2xl font-semibold w-full" >
                    <span>Klarna</span>
                    <span>coinbase</span>
                    <span>instacart</span>
                </div>
            </div>
            <div className="w-1/2 relative h-full border" ></div>
        </div>
    )
}


export default HeroSection;