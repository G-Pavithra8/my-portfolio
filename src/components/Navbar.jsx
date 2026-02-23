import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'about', 'internships', 'skills', 'projects', 'certifications', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    'Home',
    'About',
    'Internships',
    'Skills',
    'Projects',
    'Certifications',
    'Contact'
  ];

  const scrollToSection = (section) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-primary cursor-pointer relative group"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('Home')}
          >
            Portfolio
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-semibold px-3 py-2 relative transition ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: activeSection === item.toLowerCase() ? '100%' : 0 
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white text-2xl relative"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary rounded"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg font-semibold text-left relative pb-2 transition ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.toLowerCase() ? '100%' : 0 
                    }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}