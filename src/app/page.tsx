import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Clock,
  HomeIcon,
  House,
  Shield,
  Trees,
  Users,
} from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { CgCross } from "react-icons/cg";
import { TbTools } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-neutral-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-2 text-green-700 hover:text-green-500 transition font-bold text-xl">
          <House className="w-5 h-5" />
          <span>WTR Capital</span>
        </div>
        <div className="flex gap-2">
          <Button asChild  type="button" className="hover:cursor-pointer"><Link href="https://wtrcapitalllc.propertyware.com/tenants.html">Tenants</Link></Button>
          <Button asChild type="button" className="hover:cursor-pointer"><Link href="https://wtrcapitalllc.propertyware.com/owners.html">Owners</Link></Button>
          <Button asChild variant="outline" className="hover:cursor-pointer" type="button"><Link href="https://wtrcapitalllc.propertyware.com">Main Site</Link></Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/bg-house.jpg"
          alt="WTR Capital Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Faith-Driven Property Management Across Middle Tennessee
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Creating lasting value through integrity, service, and community.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Button asChild type="button" size="lg" className="text-xl hover:cursor-pointer w-full"><Link href="https://wtrcapitalllc.propertyware.com">Main Site</Link></Button>
            <Button asChild type="button" size="lg" className="text-xl hover:cursor-pointer w-full"><Link href="https://wtrcapitalllc.propertyware.com/rentals.html">View Rentals</Link></Button>
            <Button asChild type="button" size="lg" className="text-xl hover:cursor-pointer w-full"><Link href="https://app.propertyware.com/pw/application/#/tenant/wtrcapitalllc">Apply Now</Link></Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-4 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700">
            About WTR Capital
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            With a mission rooted in faith, integrity, and service, WTR Capital has
            been managing and enhancing residential and commercial properties across
            Middle Tennessee for over a decade. We build long-term relationships
            with owners and tenants through reliable, value-driven management.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard icon={<Clock className="text-green-700 w-10 h-10" />} value="10+" label="Years of Service" />
            <StatCard icon={<HomeIcon className="text-green-700 w-10 h-10" />} value="100+" label="Properties Managed" />
            <StatCard icon={<Users className="text-green-700 w-10 h-10" />} value="50+" label="Owners Served" />
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8">
            Our Values
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
            <Value icon={<Shield className="w-8 h-8 text-green-700" />} label="Integrity" />
            <Value icon={<CgCross className="w-8 h-8 text-green-700" />} label="Faith" />
            <Value icon={<BsPeople className="w-8 h-8 text-green-700" />} label="Community" />
            <Value icon={<Trees className="w-8 h-8 text-green-700" />} label="Growth" />
            <Value icon={<TbTools className="w-8 h-8 text-green-700" />} label="Excellent Service" />
            <Value icon={<Briefcase className="w-8 h-8 text-green-700" />} label="Professionalism" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <Card className="text-center shadow-md">
      <CardContent className="py-8 flex flex-col items-center">
        {icon}
        <h3 className="text-4xl font-bold text-green-700 mt-2">{value}</h3>
        <p className="mt-2 text-gray-700">{label}</p>
      </CardContent>
    </Card>
  );
}

// Reusable Value Component
function Value({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <p className="text-sm font-medium text-gray-700">{label}</p>
    </div>
  );
}
