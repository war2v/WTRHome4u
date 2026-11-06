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
        <span className="opacity-0 sm:opacity-100">WTRHome4u</span>
        </Link>
      </div>

      
      <div className="flex justify-center w-full text-green-700 ">
          <h1>
            Find the Right Home for You!
          </h1>
      </div>


      <div className="flex justify-end gap-2">
        <Link href="/properties">
            <Button variant="outline" className="flex cursor-pointer font-bold">
              <span className="hidden md:flex mr-1 ">Available</span> Properties
            </Button>
          </Link>
      </div>
    </nav>
  );
};

export default Nav;
