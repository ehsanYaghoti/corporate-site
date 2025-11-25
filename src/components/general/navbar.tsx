import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="flex items-center gap-10" >
            <Link href={'#'} className="text-lg font-medium" >Products</Link>
            <Link href={'#'} className="text-lg font-medium" >Customers</Link>
            <Link href={'#'} className="text-lg font-medium" >Pricing</Link>
            <Link href={'#'} className="text-lg font-medium" >Learn</Link>
        </nav>
    )
}

export default Navbar;
