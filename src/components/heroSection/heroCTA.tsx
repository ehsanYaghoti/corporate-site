


const HeroCta = ({ isVisible }: { isVisible: boolean }) => {

    return (
        <label className={`${isVisible ? " opacity-100 translate-y-0" : " opacity-0 translate-y-20 "} duration-1000 ease-out delay-200 transition-all 
            flex lg:gap-2 h-14 border border-black/20  w-full md:w-[300px] lg:min-w-[400px] p-px bg-white rounded-xl`
        }>
            <input type="text" name="email" className="  w-[60%] md:w-fit    border-black/20 px-2 placeholder:text-xs lg:placeholder:text-base lg:px-6  py-1 rounded-[20px] outline-none bg-white" placeholder="Your bussiness email" />
            <button type="submit" className="bg-primary text-xs lg:text-sm text-white flex flex-1 whitespace-normal items-center px-2 lg:px-6  gap-2 rounded-xl border justify-center cursor-pointer  " >
                 Get Started
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </button>
        </label>
    )
}

export default HeroCta;