import Link from "next/link";

const AuthLinks = () => {

    return (
        <div className="flex items-center gap-2" >
            <Link href={'#'} className=" font-medium border border-black/20 rounded-xl px-6 py-2 hover:bg-textColor hover:text-white " >Login</Link>
            <Link href={'#'} className="bg-primary  text-white px-6 py-2 rounded-xl font-medium border border-transparent hover:bg-transparent hover:text-primary hover:border-black/20 " >Sign Up</Link>
        </div>
    )
}

export default AuthLinks;
