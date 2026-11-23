import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
];

// `transparent` is used when the navbar sits on top of a hero image (white text).
const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const idle = transparent ? "text-white/90 hover:text-white" : "text-gray-800 hover:text-orange-500";
  const active = transparent ? "text-white font-bold" : "text-orange-500 font-bold";

  const navLinkClass = ({ isActive }) =>
    `relative py-1 transition-colors duration-200 ${isActive ? active : idle}`;

  return (
    <nav className={`${transparent ? "bg-transparent" : "bg-gray-100"} w-full relative z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center gap-6">
          {/* Logo */}
          <Link to="/" className="relative z-60 shrink-0" onClick={() => setIsOpen(false)}>
            <img
              src="/Image/Vector.png"
              alt="Larva Coding Academy"
              className={`h-9 md:h-11 w-auto ${transparent ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" : ""}`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-base font-raleway font-medium">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className={navLinkClass}>
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-2 px-5 lg:px-7 py-3 text-white text-sm font-semibold rounded-xl bg-linear-to-br from-[#7A5DA8] to-[#F39821] shadow-sm hover:shadow-md hover:opacity-95 transition-all whitespace-nowrap"
            >
              Join Now
            </Link>
          </div>

          {/* Hamburger / Close */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-60 p-2 -mr-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
              transparent && !isOpen ? "text-white" : "text-gray-800"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-50 md:hidden flex flex-col items-center justify-center gap-7 px-6 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!isOpen}
      >
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className={({ isActive }) =>
              `text-2xl font-raleway font-semibold ${isActive ? "text-orange-500" : "text-gray-800"}`
            }
          >
            {label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          tabIndex={isOpen ? 0 : -1}
          className="mt-4 w-full max-w-xs text-center px-7 py-4 text-white text-lg font-semibold rounded-2xl bg-linear-to-br from-[#7A5DA8] to-[#F39821]"
        >
          Join Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
