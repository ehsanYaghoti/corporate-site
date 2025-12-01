"use client";

import Link from "next/link";
import Logo from "./logo";
import useElementObserver from "@/hooks/useElementObserver";


const Footer = () => {

    const [containerRef , isVisible] = useElementObserver<HTMLDivElement>({root : null , rootMargin : "0px" , threshold : 0.2})
   
    return (
        <footer ref={containerRef} className="w-full flex flex-col divide-y-2 divide-black/5 px-16 pt-36 bg-netural" >
            <div className={`
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-400 ease-out transition-all 
                flex items-start justify-between py-16 pb-12`
            }>
                <Logo />
                <div className="flex gap-20" >
                    <div className="flex flex-col gap-8 " >
                        <span className="font-medium text-2xl" >Solutions</span>
                        <div className="flex flex-col gap-4" >
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70" >Small Bussiness</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >Freelancers</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >Customers</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >Taxes</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 " >
                        <span className="font-medium text-2xl" >Company</span>
                        <div className="flex flex-col gap-4" >
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >About Us</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >Career</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70 " >Contact</Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 " >
                        <span className="font-medium text-2xl" >Learn</span>
                        <div className="flex flex-col gap-4" >
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70" >Blog</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70" >Ebooks</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70" >Guides</Link>
                            <Link href={'#'} className="text-textColor/60 font-medium hover:opacity-70" >Templates</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3" >
                    <span className=" font-medium" >Follow us on</span>
                    <div className="flex items-center gap-4" >
                        <svg role="img" className="cursor-pointer hover:opacity-70" height={26} width={26} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 410.155 410.155" xmlSpace="preserve">
                            <path fill="#023247" d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
                                l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
                                c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
                                c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
                                c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
                                c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
                                c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
                                c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
                                c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
                                c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
                                c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
                                c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
                                l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"/>
                        </svg>
                        <svg role="img" className="cursor-pointer hover:opacity-70" height={26} width={26} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 382 382" xmlSpace="preserve">
                            <path fill="#023247" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                                C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                                H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                                c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                                s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                                c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                                c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                                c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                                L341.91,330.654L341.91,330.654z"/>
                        </svg>
                        <svg role="img" className="cursor-pointer hover:opacity-70" fill="#023247" width={26} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" /></svg>
                    </div>
                </div>
            </div>
            <div className={
                `${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "} duration-1000 delay-600 ease-out transition-all 
                flex items-center justify-center py-8`
            }>
                <h6 className="text-sm font-medium text-textColor/80" >Finpay 2024,All Rights Reserved.</h6>
            </div>
        </footer>
    )
}

export default Footer;