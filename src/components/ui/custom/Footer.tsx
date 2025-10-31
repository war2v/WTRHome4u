import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-10 px-4">
      <div className="items-center justify-center w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Brand & Description */}
        <div className="w-1/2">
          <h3 className="text-2xl text-green-700 font-bold mb-2">
            WTR Capital
          </h3>
          <p className="text-sm text-neutral-400">
            Faith-driven property management serving Middle Tennessee with
            integrity, professionalism, and care.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-green-700">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-neutral-500">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://wtrcapitalllc.propertyware.com/rentals.html"
                className="hover:underline"
              >
                View Rentals
              </Link>
            </li>
            <li>
              <Link
                href="https://wtrcapitalllc.propertyware.com/owners.html"
                className="hover:underline"
              >
                For Owners
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-green-700">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-500">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400" />{" "}
              <span>(615) 476-6964</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-400" />{" "}
              <span>Inquiries.wtrc@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400" />{" "}
              <span>Murfreesboro, TN</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-4 text-center text-sm text-neutral-500">
        &copy; {new Date().getFullYear()} WTR Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
