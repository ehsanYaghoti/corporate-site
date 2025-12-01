"use client"

import useElementObserver from "@/hooks/useElementObserver";
import PlansCard from "./cards/plansCard";


const Plans = () => {

    const [containerRef, isVisible] = useElementObserver<HTMLDivElement>({ root: null, rootMargin: "0px", threshold: 0.2 })

    return (
        <div ref={containerRef} className="flex flex-col items-center gap-16 py-22 w-full" >
            <div className="flex flex-col items-center gap-4" >
                <span className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 ease-out transition-all text-xs uppercase text-primary  font-medium`} >Our Mission</span>
                <h2 className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-200 ease-out transition-all text-4xl text-center `} >We've helped <br /> innovative companies</h2>
                <p className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-400 ease-out transition-all text-center text-sm leading-8 text-textColor/70 `} >Hundreds of all sizes and across all industries <br /> have made a big improvements with us. </p>
            </div>
            <div className="flex gap-16 " >
                <div className="flex flex-col gap-3 items-center" >
                    <span className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-600 delay-400 ease-out transition-all text-5xl font-medium`} >24%</span>
                    <p className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-500 ease-out transition-all font-medium `}>Revenue business</p>
                </div>
                <div className="flex flex-col gap-3 items-center" >
                    <span className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-400 ease-out transition-all text-5xl font-medium`} >180K</span>
                    <p className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-500 ease-out transition-all font-medium `}>In annual revenue</p>
                </div>
                <div className="flex flex-col gap-3 items-center" >
                    <span className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-400 ease-out transition-all text-5xl font-medium`} >10+</span>
                    <p className={` ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-500 ease-out transition-all font-medium `}>Months of runway</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6" >
                <span className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-700 ease-out transition-all text-xs uppercase font-medium`} >Choose Plan:</span>
                <div className="grid grid-cols-2 gap-6" >
                    <PlansCard isVisible={isVisible} styles="bg-netural" title="Plus" cost="$2.99/month" bgImage={false} />    
                    <PlansCard isVisible={isVisible} styles="bg-primary text-white" title="Premium" cost="$6.99/month" bgImage={true} />
                </div>
            </div>
        </div>
    )
}

export default Plans;