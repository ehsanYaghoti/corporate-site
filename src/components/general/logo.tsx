import Link from "next/link";

const Logo = () => {

    return (
        <Link href={"/"} className="flex items-center gap-2">
            <i className="h-6 w-6 rounded-sm bg-secondary logo-icon" ></i>
            <span className="text-xl lg:text-3xl  font-bold text-secondary" >Finpay</span>
        </Link>
    )
}

export default Logo;
