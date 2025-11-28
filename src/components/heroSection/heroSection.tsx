'use client';

import { useEffect, useRef, useState } from "react";
import HeroTexts from "./heroTexts";
import HeroCards from "./heroCards";

const HeroSection = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);

    const ref = useRef(null);

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {
            // console.log(entry)
            setIsVisible(true)
        } , {rootMargin : '-300px' , threshold : 1})

        // console.log(isVisible)
        if(ref.current)
            observer.observe(ref?.current);

        return () => observer.disconnect()
    } , [isVisible , ref])



    return (
        <div ref={ref} className="w-full overflow-hidden flex items-start p-10 px-16 text-textColor justify-center min-h-screen h-[800px] bg-netural " >
            <HeroTexts isVisible={isVisible} />
            <HeroCards isVisible={isVisible} />
        </div>
    )
}


export default HeroSection;