import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="flex items-center gap-10" >
            <Link href={'#'} className="text-lg font-medium hover:opacity-75" >Products</Link>
            <Link href={'#'} className="text-lg font-medium hover:opacity-75" >Customers</Link>
            <Link href={'#'} className="text-lg font-medium hover:opacity-75" >Pricing</Link>
            <Link href={'#'} className="text-lg font-medium hover:opacity-75" >Learn</Link>
        </nav>
    )
}

export default Navbar;
