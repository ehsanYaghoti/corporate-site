import { ArrowUpRight } from "lucide-react";



const PlansCard = ({ isVisible, styles, title, cost, bgImage }: { isVisible: boolean, styles: string, title: string, cost: string, bgImage: boolean }) => {
    return (
        <div className={
            `${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} 
            duration-1000 delay-900 ease-out transition-all 
            grow w-[325px] h-42 cursor-pointer ${styles} rounded-xl px-6 py-5 flex flex-col justify-between overflow-hidden `
        }>
            {
                bgImage && <div className={`z-10 absolute -right-24 -top-28 `} >
                    <div className=" w-80 h-16 bg-white/10 -skew-20 -rotate-20 translate-x-20 -translate-y-7 " ></div>
                    <div className=" w-56 h-16 bg-white/10 -skew-20 -rotate-20 -translate-x-32 translate-y-[175px] " ></div>
                    <div className=" w-42 h-16 bg-white/10 -skew-20 -rotate-20  translate-x-32 -translate-y-5 " ></div>
                    <div className=" w-72 h-16 bg-white/10 -skew-20 -rotate-20  -translate-x-[146px] translate-y-[150px] " ></div>
                </div>
            }
            <span className={`
                ${isVisible ? "opacity-100" : "opacity-0 "} 
                duration-1000 delay-1400 ease-out transition-all 
                font-semibold text-2xl`}
            >{title}</span>
            <div className={`
                ${isVisible ? "opacity-100" : "opacity-0 "} 
                duration-1000 delay-1400 ease-out transition-all 
                flex items-center justify-between`}>
                <span className="text-lg" >{cost}</span>
                <ArrowUpRight size={24} absoluteStrokeWidth />
            </div>
        </div>
    )
}

export default PlansCard;