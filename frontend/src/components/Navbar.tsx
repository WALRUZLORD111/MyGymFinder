import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 group"
        >
          <Dumbbell 
            className="text-red-700 transition-all duration-300 transform group-hover:scale-110" 
            size={32} 
          />
          <span className="text-white font-bold text-xl md:text-2xl transition-all duration-300 group-hover:text-red-600">
            FightFinder
          </span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-white hover:text-red-500 transition-colors duration-300 font-medium ${
              location.pathname === '/' ? 'border-b-2 border-red-600' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/account" 
            className={`text-white hover:text-red-500 transition-colors duration-300 font-medium ${
              location.pathname === '/account' ? 'border-b-2 border-red-600' : ''
            }`}
          >
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;