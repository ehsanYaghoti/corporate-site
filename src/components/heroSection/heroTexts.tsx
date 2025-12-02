import HeroCta from "./heroCta";

const HeroTexts = ({ isVisible }: { isVisible: boolean }) => {

    return (
        <div className="flex flex-col items-start justify-start gap-6 lg:w-2/3 xl:w-1/2 p-8 " >
            <h1 className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "} duration-1000 ease-out transition-all text-6xl font-normal font-str w-full leading-[75px]`} >
                <span className=" font-extrabold flex" >Get paid early</span> save automatically <br /> all your pay.
            </h1>
            <p className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "} duration-1000 ease-out delay-100 transition-all text-sm font-semibold text-textColor/50`} >
                Supports small businesses with simple invoicing, <br /> powerful integrations, and cash flow management tools.
            </p>

            <HeroCta isVisible={isVisible} />

            <div className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 "} duration-1000 ease-out delay-300 transition-all flex items-center justify-between text-2xl font-bold w-full mt-6 `} >
                <span>
                    Klarna</span>
                <span>coinbase</span>
                <span className="flex items-center gap-1" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-to-dot-icon lucide-arrow-down-to-dot"><path d="M12 2v14" /><path d="m19 9-7 7-7-7" /><circle cx="12" cy="21" r="1" /></svg>
                    instacart</span>
            </div>
        </div>
    )
}


export default HeroTexts;
