// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa"; 
import logo from "../../assets/LightLogo.png";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  // Define footer link sections in one place
  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "How It Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Press", href: "/press" },
    ],
    Resources: [
      { name: "Help Center", href: "/help" },
      { name: "Updates", href: "/updates" },
      { name: "API Docs", href: "/docs" },
    ],
  };

  return (
    <footer className="bg-[#061C47] text-white py-12 px-6 max-w-11/12 mx-auto">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        
        
        <div className="md:col-span-3 pr-10">
          <div className="flex items-center space-x-2 mb-4">
           
            <Image src={logo} alt="Logo" width={50} height={50} />
            <span className="text-white font-semibold text-2xl">BarterNow</span>
          </div>
          <p className="text-md text-white leading-relaxed">
            BarterNow connects sponsors and event organizers through 
            AI-powered matching, verified profiles, and secure, 
            commission-free deals.
          </p>
        </div>

      
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-white text-3xl mb-3">{section}</h3>
            <ul className="space-y-2 text-[1rem]">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

   
      <div className="border-t border-white mt-10 pt-5 pl-4 text-sm text-white flex justify-between">
        <p> © {new Date().getFullYear()} BarterNow. All rights reserved.</p>
        <div className="flex space-x-3">
          <Link
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-dark w-8 h-8 flex items-center justify-center rounded-sm hover:opacity-80 "
          >
            <FaLinkedin size={25}  className="bg-white text-[#061C47]"/>
          </Link>
          <Link
            href="#" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-white w-8 h-8 flex items-center justify-center rounded-sm hover:opacity-80"
          >
            <FaXTwitter size={25} className="bg-white text-[#061C47]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
