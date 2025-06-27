import { House } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";

const Nav = () => {
    return ( 
        <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-green-700 hover:text-green-500 transition font-bold text-xl">
                <House className="w-5 h-5" />
                <span className="opacity-0 sm:opacity-100">WTRHome4U</span>
                
            </div>
            <div className="flex gap-2 justify-end w-full">
                    <Button asChild type="button" className="hover:cursor-pointer">
                        <Link href="https://wtrcapitalllc.propertyware.com/tenants.html">
                        Tenants
                        </Link>
                    </Button>
                    <Button asChild type="button" className="hover:cursor-pointer">
                        <Link href="https://wtrcapitalllc.propertyware.com/owners.html">
                        Owners
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="hover:cursor-pointer hidden md:flex"
                        type="button"
                    >
                        <Link href="https://wtrcapitalllc.propertyware.com">Main Site</Link>
                    </Button>
                    </div>
        </nav>
     );
}
 
export default Nav;