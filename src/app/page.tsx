import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/ui/custom/Nav";
import Values from "@/components/ui/custom/Values";
import About from "@/components/ui/custom/About";
import Footer from "@/components/ui/custom/Footer";
import { Team } from "@/components/ui/custom/Team";
import { Inquiry } from "@/components/ui/custom/Inquiry";

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
            <div className="mt-6 w-1/2  max-w-2xl gap-4 justify-center grid grid-cols-1 md:grid-cols-3 md:w-full ">
              <Button
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full"
              >
                <Link href="https://calendly.com/aruss-wtrc/30min">
                  Schedule Showing
                </Link>
              </Button>
              <Button
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full"
              >
                <Link href="https://wtrcapitalllc.propertyware.com/rentals.html">
                  View Rentals
                </Link>
              </Button>
              <Button
                asChild
                type="button"
                size="lg"
                className="text-xl hover:cursor-pointer w-full"
              >
                <Link href="https://app.propertyware.com/pw/application/#/tenant/wtrcapitalllc">
                  Apply Now
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

        <Inquiry />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
