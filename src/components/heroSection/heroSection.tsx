'use client';

import HeroTexts from "./heroTexts";
import HeroCards from "./heroCards";
import useElementObserver from "@/hooks/useElementObserver";

const HeroSection = () => {

    const [ containerRef , isVisible] = useElementObserver<HTMLDivElement>({ root: null, rootMargin: '0px', threshold: 0.5 })

    return (
        <div ref={containerRef} className="w-full overflow-hidden flex flex-col gap-16 lg:gap-28 xl:gap-16  md:flex-row h-[600px] lg:h-[700px] xl:h-[800px] items-start justify-start md:justify-center
        lg:px-6  xl:px-8 2xl:px-16 text-textColor  lg:min-h-screen  bg-netural " >
            <HeroTexts isVisible={isVisible} />
            <HeroCards isVisible={isVisible} />
        </div>
    )
}


export default HeroSection;