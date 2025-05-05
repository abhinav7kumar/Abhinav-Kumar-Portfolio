import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16 md:h-20">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-8">
              <NavLink href="#home" isScrolled={isScrolled}>Home</NavLink>
              <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
              <NavLink href="#skills" isScrolled={isScrolled}>Skills</NavLink>
              <NavLink href="#experience" isScrolled={isScrolled}>Experience</NavLink>
              <NavLink href="#projects" isScrolled={isScrolled}>Projects</NavLink>
              <NavLink href="#awards" isScrolled={isScrolled}>Awards</NavLink>
              <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden absolute right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}