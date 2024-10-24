import { useState } from "react";
import { Menu, X } from "lucide-react";
import adminIcon from "./../../assets/icons/🦆 icon _person_.png";
import Logo from "./../../assets/icons/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="bg-transparent text-white absolute z-10 px-4 py-2   w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex justify-center items-center">
            <div>
              <img src={Logo} alt="logo" className="w-12 h-[50px]" />
            </div>
            <div>
              <span className="text-[#FFFFFF] text-lg  font-semibold ">
                Tech <br /> Creator
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2  text-base rounded-md  font-medium hover:bg-[#9A00FF] text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <img
              src={adminIcon}
              alt="person_image"
              className="w-[32.11px] h-[32.11px]"
            />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
