import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';

const navItems = [
  { key: 'about', sectionId: 'about' },
  { key: 'education', sectionId: 'education' },
  { key: 'courses', sectionId: 'courses' },
  { key: 'technologies', sectionId: 'technologies' },
  { key: 'experience', sectionId: 'experience' },
  { key: 'axk', sectionId: 'axk' },
  { key: 'portfolio', sectionId: 'portfolio' },
  { key: 'contact', sectionId: 'contact' },
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const offset = 150;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].sectionId);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + scrollPosition;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition + offset >= sectionTop && scrollPosition + offset < sectionBottom) {
            setActiveSection(navItems[i].key);
            break;
          }

          if (
            i === navItems.length - 1 &&
            scrollPosition + windowHeight >= document.body.scrollHeight - 100
          ) {
            setActiveSection(navItems[i].key);
            break;
          }
        }
      }
    };

    handleScroll();

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const handleNavClick = (sectionId: string, key: string) => {
    scrollToSection(sectionId);

    setActiveSection(key);

    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-16 md:top-20 left-0 right-0 z-40 glass-card backdrop-blur-lg border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 w-full justify-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.sectionId, item.key)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.key
                    ? 'text-aqua-green'
                    : 'text-gray-600 dark:text-gray-400 hover:text-aqua-green'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(`nav.${item.key}`)}

                {/* Barrinha indicadora - agora com layoutId único */}
                {activeSection === item.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-aqua-green to-baby-blue rounded-full"
                    layoutId="navActiveIndicator"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                      duration: 0.3,
                    }}
                  />
                )}

                <motion.div
                  className="absolute inset-0 bg-aqua-green/10 rounded-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass-card hover:bg-white/20 dark:hover:bg-black/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-aqua-green" />
              ) : (
                <Menu className="w-6 h-6 text-aqua-green" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 py-4"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.sectionId, item.key)}
                    className={`relative p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.key
                        ? 'text-aqua-green bg-aqua-green/10'
                        : 'text-gray-600 dark:text-gray-400 hover:text-aqua-green hover:bg-white/10 dark:hover:bg-black/20'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t(`nav.${item.key}`)}

                    {/* Indicador visual para mobile */}
                    {activeSection === item.key && (
                      <motion.div
                        className="absolute inset-0 border-2 border-aqua-green rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
