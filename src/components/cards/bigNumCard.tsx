import { CSSProperties } from "react"

type Props = {
    isVisible: boolean,
    data: {
        number: string | number,
        title: string,
        description: string
    },
    delay: number
}

const BigNumCard = ({ isVisible, data : { number, title, description } , delay }: Props) => {
    return (
        <div style={{"--animation-delay" : delay} as CSSProperties} className={`${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-transition ease-out transition-all h-full grow max-w-96 bg-white/5 p-6 rounded-lg flex flex-col gap-2  `} >
            <span className={` ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-transition-1 ease-out transition-all text-6xl bg-linear-to-t from-transparent to-white/90 from-25% bg-origin-content bg-clip-text text-transparent`} >{number}</span>
            <h3 className={` ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-transition-2 ease-out transition-allfont-medium text-xl text-white/85`}>{title}</h3>
            <p className={` ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 "} duration-1000 delay-transition-2 ease-out transition-all text-sm font-medium text-white/50  `} >{description}</p>
        </div>
    )
}

export default BigNumCard;