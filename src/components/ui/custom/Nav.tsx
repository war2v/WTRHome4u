"use client"
import { House, Menu } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  
  return (
    <nav className="fixed z-1000 w-full grid grid-cols-3 justify-between items-center px-6 py-3 bg-white/50 shadow-sm">
      <div className="flex items-center gap-2 text-primary hover:text-green-500 transition font-bold text-xl">
        <Link href={'/'} className="flex items-center gap-2 text-primary hover:text-green-500 transition font-bold text-xl">
        <House className="w-5 h-5" />
        <span className="opacity-0 sm:opacity-100">WTRHome4U</span>
        </Link>
      </div>

      
      <div className="flex justify-center w-full text-green-700 ">
          <Link href="https://wtrcapitalllc.appfolio.com/listings">
            <Button variant="outline" className="flex cursor-pointer font-bold">
              <span className="hidden md:flex mr-1 ">Available</span> Properties
            </Button>
          </Link>
      </div>


      <div className="flex justify-end gap-2">
        <div>
          <Menu className="text-green-600 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className={`fixed w-1/4 bg-white p-2 rounded-2xl border-2 border-gray-300 gap-2 justify-end transition-all duration-300 ${menuOpen ? "hidden" : "flex flex-col"}`}>
          <div className="flex justify-center">
            <Menu className="text-green-600 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <Button asChild size="sm" type="button" className="hover:cursor-pointer">
            <Link href={`${process.env.NEXT_PUBLIC_DOMAIN}/admin`}>
              Admin
            </Link>
          </Button>
          <Button asChild size="sm" type="button" className="hover:cursor-pointer">
            <Link href="https://wtrcapitalllc.propertyware.com/tenants.html">
              Tenants
            </Link>
          </Button>
          <Button asChild size="sm" type="button" className="hover:cursor-pointer">
            <Link href="https://wtrcapitalllc.propertyware.com/owners.html">
              Owners
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hover:cursor-pointer  md:flex"
            type="button"
            size="sm"
          >
            <Link href="https://wtrcapitalllc.propertyware.com">Main Site</Link>
          </Button>
          
        </div>
      </div>
    </nav>
  );
};

export default Nav;
