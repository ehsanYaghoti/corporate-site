'use client';

import useElementObserver from "@/hooks/useElementObserver";
import { ArrowLeftRight, Landmark } from "lucide-react";
import Image from "next/image";



const WhyFinpay = () => {


    const [containerRef , isVisible] = useElementObserver<HTMLDivElement>({root : null ,  rootMargin : "0px" , threshold : 0.5})

    return (
        <div ref={containerRef} className=" flex flex-col w-full p-16 items-center gap-8" >
            <div className="flex flex-col items-center gap-4 " >
                <span className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all text-xs uppercase font-semibold text-primary `}>Why us</span>
                <h2 className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 delay-200 ease-out transition-all text-4xl `} >Why they prefer Finpay</h2>
            </div>
            <div className=" w-[65%] grid grid-cols-2 gap-8 " >
                <div className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-400 ease-out transition-all h-64 rounded-2xl bg-netural flex flex-col justify-between p-8 `} >
                    <p className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-600 ease-out transition-all text-6xl font-semibold  text-primary  `} >3k<span className="   align-text-top " >+</span></p>
                    <p className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-800 ease-out transition-all font-medium text-2xl leading-9 `}>Businesses already running <br /> on Finpay</p>
                </div>
                <div className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 "} duration-1000 delay-1000 ease-out transition-all h-64 rounded-2xl bg-netural flex flex-col gap-14  p-8 `} >
                    <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 "} duration-1000 delay-1200 ease-out transition-all text-xl font-medium leading-9  `} >Instant Withdraw your funds <br /> at any time</p>
                    <div className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 "} duration-1000 delay-1400 ease-out transition-all flex  items-center justify-center gap-4 `} >
                        <div className=" w-13 h-13 rounded-lg text-black/ bg-primary " >
                        </div>
                        <ArrowLeftRight size={36}  color="#00000036" absoluteStrokeWidth />
                        <div className="w-13 h-13 rounded-full bg-accent flex items-center justify-center" >
                            <Landmark color="white" size={32} absoluteStrokeWidth />
                        </div>
                    </div>
                </div>
                <div className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 delay-1600 ease-out transition-all h-64 col-span-2 rounded-2xl bg-netural p-10 flex items-center gap-36 overflow-hidden `} >
                    <div className="flex flex-col gap-6" >
                        <span className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 delay-1800 ease-out transition-all text-3xl font-semibold `} >No asset volatility</span>
                        <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 delay-2000 ease-out transition-all text-sm text-black/50 leading-6 font-medium `}>
                            Generate return on your <br /> cash reserves without making <br /> any investments
                        </p>
                    </div>
                    <Image src={'/finance-chart.png'} alt="why finapy" className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "} duration-1000 delay-2200 ease-out transition-all object-cover rounded-t-2xl translate-y-4 shadow-2xl `} width={400} height={100} />
                </div>
            </div>
        </div>
    )
}

export default WhyFinpay; 