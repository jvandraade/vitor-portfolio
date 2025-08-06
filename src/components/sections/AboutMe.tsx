import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Code, Gamepad2, Brain, Trophy, ChevronDown } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: Code,
      title: 'UI/UX Specialist',
      description: 'Foco em experiências digitais excepcionais',
    },
    {
      icon: Brain,
      title: 'AI & ML Expert',
      description: 'Especialista em Inteligência Artificial',
    },
    {
      icon: Gamepad2,
      title: 'Gaming Enthusiast',
      description: 'Competidor semi-profissional',
    },
    {
      icon: Trophy,
      title: 'Problem Solver',
      description: 'Soluções criativas e eficientes',
    },
  ];

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('education');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-aqua-green rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-aqua-green text-lg font-medium">👋 Olá! Eu sou</p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold">
                <span className="text-gradient bg-gradient-to-r from-aqua-green via-baby-blue to-gold bg-clip-text text-transparent">
                  {t('about.name')}
                </span>
              </h1>

              <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300">
                  {t('about.role')}
                </h2>
                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-primary rounded-full" />
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {t('about.description')}
            </motion.p>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <span className="text-2xl">🎂</span>
                <span className="text-gray-600 dark:text-gray-400">21 {t('about.age')}</span>
              </div>

              <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-aqua-green" />
                <span className="text-gray-600 dark:text-gray-400">{t('about.location')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 213, 183, 0.1)',
                }}
                className="glass-card p-6 rounded-2xl hover-lift group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-aqua-green transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </div>

                {/* Minecraft-style border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-aqua-green animate-pulse" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-gold rounded-lg"
          />
        </div>

        <div className="absolute bottom-20 left-10 opacity-20">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-12 h-12 bg-aqua-green rounded-lg"
          />
        </div>

        {/* Improved Scroll Indicator - More Accessible Position */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-20"
        >
          <motion.button
            onClick={scrollToNextSection}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.2 },
            }}
            className="group flex flex-col items-center space-y-2 glass-card p-4 rounded-2xl hover:bg-aqua-green/10 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-aqua-green transition-colors whitespace-nowrap">
              Explorar
            </span>

            <div className="flex flex-col items-center space-y-1">
              <ChevronDown className="w-5 h-5 text-aqua-green group-hover:text-gold transition-colors" />
              <motion.div
                animate={{ scaleY: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-0.5 h-4 bg-gradient-to-b from-aqua-green to-transparent rounded-full"
              />
            </div>
          </motion.button>
        </motion.div>

        {/* Alternative: Bottom Center Scroll Hint (More Subtle) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-600"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center opacity-60">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </div>
            <span className="text-xs opacity-70">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
