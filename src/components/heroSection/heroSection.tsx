'use client';

import HeroTexts from "./heroTexts";
import HeroCards from "./heroCards";
import useElementObserver from "@/hooks/useElementObserver";

const HeroSection = () => {

    const [ containerRef , isVisible] = useElementObserver<HTMLDivElement>({ root: null, rootMargin: '0px', threshold: 0.5 })

    return (
        <div ref={containerRef} className="w-full overflow-hidden flex items-start p-10 px-16 text-textColor justify-center min-h-screen h-[800px] bg-netural " >
            <HeroTexts isVisible={isVisible} />
            <HeroCards isVisible={isVisible} />
        </div>
    )
}


export default HeroSection;