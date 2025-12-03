"use client";

import useElementObserver from "@/hooks/useElementObserver";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";



const WhatsNext = () => {

    const [containerRef , isVisible] = useElementObserver<HTMLDivElement>({root : null , rootMargin : "0px" , threshold : 0.2})

    return (
        <div ref={containerRef} className="flex flex-col gap-12 md:flex-row items-center justify-between bg-accent p-6 lg:p-16 w-[90%] xl:w-[80%] rounded-xl text-white -mb-32 z-20 overflow-hidden" >
            <div className="flex flex-col gap-7" >
                <span className={
                    ` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 "} duration-1000 ease-out transition-all
                    text-primary uppercase text-xs font-semibold `
                }>Try it Now</span>
                <h2 className={
                    `  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-200 ease-out transition-all
                    text-2xl md:text-4xl font-medium`
                }>
                    Ready to level up your payment process?
                </h2>
                <p className={
                    ` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-400 ease-out transition-all 
                    text-white/70 text-sm`
                }>
                    Supports small businesses with simple invoicing, powerful <br /> integrations, and cash flow management tools.
                </p>
            </div>
            <div className={
                `${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-transition ease-out transition-all 
                flex flex-col lg:flex-row gap-5 `
            }>
                <Link href={'#'} className="px-6 py-3 bg-primary text-xs lg:text-sm whitespace-nowrap  border border-transparent rounded-2xl" >
                    Get Started Now
                </Link>
                <Link href={'#'} className="px-6 py-3 text-xs lg:text-sm border whitespace-nowrap border-white/50 rounded-2xl flex items-center gap-3 " >
                    Learn More
                    <ArrowUpRight size={20} />
                </Link>
            </div>
        </div>
    )
}

export default WhatsNext;