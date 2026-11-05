import Nav from "@/components/ui/custom/Nav";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: "400",
  variable: "--font-mont-sans",
  subsets: ["cyrillic"]
});

export default function PropertiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  
    <div className={`${montserrat.variable} ${montserrat.variable} antialiased bg-white`}>
        <Nav />
        <div className="flex flex-col pt-15 p-10">
          {children}
        </div>
    </div>
    
  );
}