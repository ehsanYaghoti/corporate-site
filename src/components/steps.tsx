'use client';

import useElementObserver from "@/hooks/useElementObserver";
import BigNumCard from "./cards/bigNumCard";


const Steps = () => {

    const [containerRef , isVisible] = useElementObserver<HTMLDivElement>({root : null , rootMargin : "0px" , threshold : 0.2}) 

    return (
        <div ref={containerRef} className=" w-full p-20 bg-accent text-white flex flex-col gap-12 " >
            <div className="flex flex-col gap-3 " >
                <span className={`${isVisible ? "opacity-100" : "opacity-0"} duration-1000 ease-out transition-all text-xs text-primary uppercase font-medium`} >Step</span>
                <h2 className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 "} duration-1000 delay-200 ease-out transition-all text-3xl  leading-10`} >
                    Maximize your returns with a <br /> Reserve account that generates.
                </h2>
            </div>
            <div className="flex gap-8 justify-between  " >
                <BigNumCard isVisible={isVisible} data={{ number: 1, title: "Open your account", description: "Sign up to finpay and set up your account from the dashboard." }} delay={400} />
                <BigNumCard isVisible={isVisible} data={{ number: 2, title: "Transfer your money", description: "Move money from to another account into and start to earning up." }} delay={1000} />
                <BigNumCard isVisible={isVisible} data={{ number: 3, title: "Watch your balance grow", description: "Accessed instantlt and remain insulated from market volatility." }} delay={1600} />
            </div>
        </div>
    )
}

export default Steps;