import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const navigate=useNavigate();
  return (
    <nav
  className={`fixed bottom-0 left-0 w-full bg-[rgba(0,0,0,0.3)] text-white px-6 py-4 flex items-center justify-between transition-opacity duration-500 z-50 ${
    showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>

      <img src="assets/logo.png" alt="logo" className="h-10" onClick={() =>navigate('/')
            }/>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        <li className="hover:text-red-500 hover:font-bold"><Link to="/">Home</Link></li>
        <li className="hover:text-red-500 hover:font-bold"><a href="#">Services</a></li>
        <li className="hover:text-red-500 hover:font-bold"><Link to="/about">About</Link></li>
        <li className="hover:text-red-500 hover:font-bold"><a href="#">Contact</a></li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute bottom-16 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden z-50 shadow-lg">
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" onClick={toggleMenu}>Services</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
