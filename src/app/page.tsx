import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/ui/custom/Nav";
import Values from "@/components/ui/custom/Values";
import About from "@/components/ui/custom/About";
import Footer from "@/components/ui/custom/Footer";
import { Team } from "@/components/ui/custom/Team";
import InquiryForm from "@/components/ui/custom/Inquiry";
import { House } from "lucide-react";
import { BsPeople } from "react-icons/bs";
import { FaBusinessTime } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" min-h-screen w-full h-screen">
      {/* Navbar */}
      <Nav />

      <div className="relative top-14">
        {/* Values Section */}
        <Values />

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
            <div className="mt-6 w-1/2  max-w-2xl gap-4 justify-center flex flex-col md:w-full ">
              
              <Button
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full"
              >
                <Link href="/properties">
                  <House /> View  Properties
                </Link>
              </Button>
              
              <Button 
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full">
                <Link href="https://account.appfolio.com/realms/foliospace/protocol/openid-connect/auth?client_id=account-picker&redirect_uri=https%3A%2F%2Faccount.appfolio.com%2Frealms%2Ffoliospace%2Fappfolio%2Faccount-picker%2Flogin-redirect%3Fpath%3D%2F&state=0%2F8f999ece-1a98-f3c0-7d2f-9a9420fe074f&response_type=code&scope=openid">
                  <BsPeople/> Tenant Login
                </Link>
              </Button>
              <Button 
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full">
                <Link href="https://wtrcapitalllc.appfolio.com/oportal/users/log_in">
                  <FaBusinessTime/> Owner Login
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Team  */}
        <Team />

        {/* Featured Properties */}

        {/* Map Section 
        <Map />
        */}

        {/* Inquiry Section */}

        <InquiryForm />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
