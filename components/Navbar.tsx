import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { CATEGORIES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isOpen ? 'bg-stone-50/95 backdrop-blur-md border-stone-200 py-4' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-semibold tracking-widest z-50">
            LUMEN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide uppercase font-medium">
            <div className="relative group">
              <Link to="/shop" className="hover:text-stone-600 transition-colors">Shop</Link>
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white border border-stone-100 shadow-xl p-6 min-w-[200px] flex flex-col gap-3 text-center">
                  {CATEGORIES.map(cat => (
                    <Link key={cat} to={`/shop?category=${cat}`} className="text-stone-500 hover:text-black whitespace-nowrap">
                      {cat}
                    </Link>
                  ))}
                  <Link to="/shop" className="text-stone-900 font-semibold border-t pt-2 mt-1">View All</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="hover:text-stone-600 transition-colors">The Studio</Link>
            <Link to="/intervention-jacket" className="hover:text-stone-600 transition-colors text-stone-900 font-semibold">Intervention Jacket</Link>
            <Link to="/workshops" className="hover:text-stone-600 transition-colors">Workshops</Link>
            <Link to="/wholesale" className="hover:text-stone-600 transition-colors">Wholesale</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6 z-50">
             {/* Simple cart placeholder */}
             <button className="relative hover:opacity-60 transition-opacity">
               <ShoppingBag size={20} strokeWidth={1.5} />
               <span className="absolute -top-1 -right-1 w-2 h-2 bg-stone-900 rounded-full"></span>
             </button>
             <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-8 text-xl font-serif">
          <Link to="/shop" className="hover:italic">Shop All</Link>
          <Link to="/about" className="hover:italic">The Studio</Link>
          <Link to="/intervention-jacket" className="hover:italic">Intervention Jacket</Link>
          <Link to="/workshops" className="hover:italic">Workshops</Link>
          <Link to="/wholesale" className="hover:italic">Wholesale</Link>
          <Link to="/contact" className="hover:italic">Contact</Link>
        </div>
        
        <div className="mt-12 text-sm text-stone-400 font-sans uppercase tracking-widest">
          Categories
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 px-8">
           {CATEGORIES.map(cat => (
             <Link key={cat} to={`/shop?category=${cat}`} className="text-sm border border-stone-200 px-3 py-1 rounded-full text-stone-600">
               {cat}
             </Link>
           ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
