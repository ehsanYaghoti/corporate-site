'use client';

import { CreditCard, Landmark, ShieldHalf } from "lucide-react";
import { useEffect, useRef, useState } from "react";



const Features = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const containerRef = useRef(null);

    const callbackFunciton = (entries: IntersectionObserverEntry[] , observer : IntersectionObserver ) => {
        const [entry] = entries;
        console.log(entry.intersectionRatio)
        if(entry.intersectionRatio > 0.2){
            setIsVisible(true);
            observer.unobserve(entry.target);
            observer.disconnect();
        }
        // if(entry.intersectionRatio < 5){
        //     setIsVisible(false);
        // }
    }

    const options = { root: null, rootMargin: "0px", threshold: 0.2 }

    console.log(isVisible)


    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunciton, options)

        if (containerRef.current)
            observer.observe(containerRef?.current);

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            observer.disconnect();
        }

    }, [containerRef , options])

    return (
        <section ref={containerRef} className=" border-2 p-16 m-10 w-[80%] -mt-30  z-40 bg-white border-black/10 text-textColor rounded-xl shadow-xl flex flex-col gap-16  " >
            <div className=" flex items-center justify-between" >
                <div className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-36'} transition-all duration-1000 ease-out flex flex-col gap-3`} >
                    <span className=" text-sm font-semibold text-primary uppercase " >Futute Payment</span>
                    <h2 className=" font-semibold text-4xl" >
                        Experience that grows <br />
                        with your scale.
                    </h2>

                </div>
                <p className={`${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-36'} transition-all duration-1000 delay-200 ease-out text-black/40 text-start w-96 leading-7`} >
                    Design a financial operating system that works for your business and streamlined cash flow management
                </p>
            </div>
            <div className=" grid grid-cols-3 gap-x-36" >
                <div className="flex flex-col gap-4" >
                    <CreditCard color="#275264" strokeWidth={1} size={48} className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 ease-out transition-all delay-1300 `} />
                    <h3 className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-1500  font-semibold text-xl`}  >Free transfers</h3>
                    <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-1700 text-start text-sm text-black/40`}>
                        Create a financial experienceay and automate repeat purchases by schrduling recutting payments.
                    </p>
                </div>
                <div className="flex flex-col gap-4" >
                    <Landmark color="#275264" strokeWidth={1} size={48} className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 ease-out transition-all delay-2100 `} />
                    <h3 className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-2300 font-semibold text-xl`} >Multiple account</h3>
                    <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-2500 text-start text-sm text-black/40`} >
                        Run your operations with cash from your account and generate yield on funds stores in your account.
                    </p>
                </div>
                <div className="flex flex-col gap-4" >
                    <ShieldHalf color="#275264" strokeWidth={1} size={48} className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 "} duration-1000 ease-out transition-all delay-3000 `} />
                    <h3 className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-3200 font-semibold text-xl`} >Unmatched security</h3>
                    <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 "} duration-1000 ease-out transition-all delay-3400 text-start text-sm text-black/40`} >
                        Security manage your fincances with organuzation-wide MFA, card-locking,and account-level controls.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features;