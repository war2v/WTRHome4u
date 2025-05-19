import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Briefcase, House, Shield, Trees } from "lucide-react";
import Image from "next/image";
import { BsPeople, BsTools } from "react-icons/bs";
import { CgCross } from "react-icons/cg";
import { TbGrowth, TbTools } from "react-icons/tb";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <nav className="flex gap-x-2 items-center m-2 p-2 bg-neutral-100 rounded-xl shadow-sm">
        <div className="flex gap-x-2 hover:text-green-500 transition">
          <House/>
          <h1>WTR</h1>
        </div>
        <div className="flex w-full justify-end gap-x-2">
          <Button>Tenants</Button>
          <Button variant="outline">Owners</Button>
        </div>
      </nav>
      
      <Card className="m-2 p-2 rounded-xl shadow-sm h-full">
        <CardHeader className="flex justify-center p-4">
            <div className="flex flex-col gap-y-8 items-center rounded-lg p-4 my-4 w-3/4">
              <h1 className="text-4xl">Faith-Driven Property Management Across Middle Tennessee</h1>
              <p className="text-green-800">Residential & Commercial Rentals | Investor Services | 24/7 Maintenance</p>
              <div className="border w-full border-neutral-300"/>
              <h1 className="text-muted-foreground text-lg font-semibold">Come to us for your next home or need property management serices!</h1>
              <div className="flex justify-center-center gap-x-4 py-4">
                  <Button size="sm" className="text-sm">Properties</Button>
                  <Button size="sm" className="text-sm">Tenant Application</Button>
                  <Button size="sm" className="text-sm">Property Management</Button>
              </div>
              <div className="w-full flex justify-center gap-x-4 ">
                
                <Image src="/bg-nashsky.jpg" alt="nashville skyline" className="rounded-lg" width={500} height={500} />
                <Image src="/bg-murf.jpg" alt="nashville skyline" className="rounded-lg" width={500} height={500} />
              </div>
            </div>
          </CardHeader>
        <CardContent>
          <CardDescription>
            
            <div className="flex flex-col items-center gap-y-4  rounded-lg">
              <div className="w-3/4">
                <p className="text-lg">At WTR Capital, our mission is to deliver exceptional property management services rooted in integrity, faith, and community. We strive to enhance the value of real estate investments while creating quality living and working spaces that improve lives across Middle Tennessee</p>
              </div>

              <div className="border w-full border-neutral-300"/>
              
              <div className="flex flex-col items-center">
                <h1 className="text-xl text-green-800">Our Values</h1>
                <div className="flex gap-x-3">
                  <div className="flex items-center gap-1">
                    <Shield/>
                    <h1>Integrity</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <CgCross size={28}/>
                    <h1>Faith</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsPeople size={20}/>
                    <h1>Community</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <Trees />
                    <h1>Growth</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <TbTools size={19}/>
                    <h1>Exellent Service</h1>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase size={19}/>
                    <h1>Profressionalism</h1>
                  </div>
                </div>
              </div>
            </div>
          </CardDescription>
        </CardContent>
      </Card>
      
    </div>
  );
}
