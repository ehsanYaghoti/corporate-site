import Image from "next/image";

const HeroCards = ({isVisible} : {isVisible : boolean}) => {

    return (
        <div className="w-1/2 relative h-full" >
            <div className={`${isVisible ? " opacity-100 translate-x-0" : "opacity-0 -translate-x-36"} duration-1500 ease-out delay-1500 transition-all z-10 absolute -right-18 top-26 `} >
                <div className=" w-80 h-24 bg-black/5 -skew-20 -rotate-20 -translate-y-[27px] " ></div>
                <div className=" w-56 h-24 bg-black/5 -skew-20 -rotate-20 -translate-x-52 translate-y-[180px] " ></div>
                <div className=" w-42 h-24 bg-black/5 -skew-20 -rotate-20  translate-x-38 -translate-y-24 " ></div>
                <div className=" w-72 h-24 bg-black/5 -skew-20 -rotate-20  -translate-x-[122px] translate-y-[75px] " ></div>
            </div>
            <div className={`${isVisible ? " opacity-100 translate-y-0" : "opacity-0 translate-y-36"} duration-1500 ease-out delay-900 transition-all flex flex-col gap-4 shadow-lg rounded-3xl p-6 min-h-[300px] w-80 bg-white absolute right-46 top-18 z-20`} >
                <div className="flex items-center gap-3" >
                    <div className="bg-primary w-10 h-10 rounded-[10px] flex items-center justify-center" >
                        <div className="w-4 h-4 bg-white rounded-full rounded-tl-2xl relative after:content-[''] after:w-2 after:h-2 after:rounded-full after:absolute after:left-1/2 after:top-1/2 after:-translate-1/2 after:bg-primary after:rounded-tl-md " ></div>
                    </div>
                    <div className="flex flex-col gap-0 " >
                        <h2 className=" text-textColor font-semibold" >Dipa Inhouse</h2>
                        <p className="text-textColor/50 text-xs font-medium" >dipainhouse@gmail.com</p>
                    </div>
                </div>
                <div className="p-4 border-2 border-black/5 font-medium rounded-xl flex flex-col gap-1.5 text-textColor" >
                    <span className="text-xs text-textColor/50" >Invoice</span>
                    <span className="text-2xl font-extrabold" >$1,876,580</span>
                    <span className="text-xs text-textColor/50 " >April 21,2024</span>
                </div>
                <div className="px-4 py-2 border-2 border-primary [&>input[type='radio']:checked]:border-orange-600 rounded-xl flex items-center justify-between  " >
                    <div className="flex items-center gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
                        <span className="text-sm font-medium text-textColor " >Credit Card</span>
                    </div>
                    <input type="radio" name="creditCard" id="Credit" className="" checked readOnly />
                </div>

                <div className="px-4 py-2 border-2 border-black/5 rounded-xl flex items-center justify-between" >
                    <div className="flex items-center gap-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7" /><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M3 22h18" /><path d="M6 18v-7" /></svg>
                        <span className="text-sm font-medium text-textColor " >Bank Account</span>
                    </div>
                    <input type="radio" name="bankAccount" id="bank" checked={false} readOnly className="" />
                </div>
                <button className="px-4 py-2 border-2 border-black/5 rounded-xl bg-accent cursor-pointer text-white" >Pay</button>
            </div>
            <div className={`${isVisible ? " opacity-100 translate-y-0 " : "opacity-0 translate-y-40"} duration-1500 ease-out delay-1200 transition-all flex flex-col  bg-primary text-white border-white shadow-xl rounded-3xl w-48 min-h-[250px] right-26 top-10 z-30 absolute `} >
                <div className="flex flex-col gap-3 p-6 grow "  >
                    <span className=" text-xs text-white/90 " >Credit Card</span>
                    <p className="font-semibold text-xl flex items-center gap-2 align-middle  "><span>234</span> <span className=" align-middle  " >**** ****</span></p>
                </div>
                <div className="bg-accent w-full h-20 rounded-b-3xl self-end justify-self-end p-6  pl-0  flex items-center justify-between ">
                    <Image src={'visa.svg'} alt="visa" className=" text-start w-24 h-auto " width={100} height={100} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi-icon lucide-wifi rotate-90 text-white/80"><path d="M2 8.82a15 15 0 0 1 20 0" /><path d="M5 12.859a10 10 0 0 1 14 0" /><path d="M8.5 16.429a5 5 0 0 1 7 0" /></svg>
                </div>
            </div>
        </div>
    )
}


export default HeroCards;