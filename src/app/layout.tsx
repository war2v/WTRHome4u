import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  weight: "400",
  variable: "--font-mont-sans",
  subsets: ["cyrillic"]
});

export const metadata: Metadata = {
  title: "WTR Capital",
  description: "Property Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
