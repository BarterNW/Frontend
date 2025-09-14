import Image from "next/image";
import logo from "../../assets/Logo.png";
export default function Header() {
  // Navigation links stored in array
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#how" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Events", href: "#events" },
  ];

  return (
    <div className="flex mx-auto items-center justify-between border-1 border-black rounded-full px-6 py-2 shadow-sm bg-white w-fit my-4 ">
      <div className="flex items-center space-x-2">
       
        <Image src={logo} alt="Logo" width={50} height={50} />
        <span className="font-semibold tect-black text-lg">BarterNow</span>
      </div>

    
      <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 mx-4 ">
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="hover:text-primary-dark"
          >
            {link.name}
          </a>
        ))}
      </div>

   
      <a
        href="#organisers"
        className="hidden md:block bg-[#0C2146] text-white px-5 py-2 rounded-full font-medium hover:bg-[#122e63] flex items-center space-x-1"
      >
        <span>Event Organisers</span>
        <span>→</span>
      </a>
    </div>
  );
}
