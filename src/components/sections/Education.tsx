import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: string;
  color: string;
  icon: string;
}

export const Education: React.FC = () => {
  const { t } = useTranslation();

  const educationData: EducationItem[] = [
    {
      id: 'ads',
      title: t('education.ads.title'),
      institution: t('education.ads.institution'),
      period: t('education.ads.period'),
      status: t('education.ads.status'),
      color: 'from-aqua-green to-forest-green',
      icon: '🎓',
    },
    {
      id: 'pos',
      title: t('education.pos.title'),
      institution: t('education.pos.institution'),
      period: t('education.pos.period'),
      status: t('education.pos.status'),
      color: 'from-baby-blue to-aqua-green',
      icon: '🚀',
    },
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-aqua-green/10 via-transparent to-gold/10" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 bg-gradient-primary rounded-xl">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-6">
            {t('education.title')}
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 25px 50px rgba(0, 213, 183, 0.15)',
              }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${education.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Card Content */}
                <div className="relative z-10 space-y-6">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-3">
                      <span className="text-4xl">{education.icon}</span>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          education.status === 'Concluído'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}
                      >
                        {education.status}
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-xl bg-white/10 dark:bg-black/20"
                    >
                      <Award className="w-5 h-5 text-gold" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-aqua-green transition-colors duration-300">
                      {education.title}
                    </h3>
                  </div>

                  {/* Institution */}
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 text-aqua-green" />
                    <span className="font-medium">{education.institution}</span>
                  </div>

                  {/* Period */}
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-baby-blue" />
                    <span>{education.period}</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className={`w-full h-full bg-gradient-to-br ${education.color} rounded-2xl`}
                  />
                </div>

                {/* Minecraft-style border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute inset-0 rounded-3xl border-2 border-aqua-green/50"
                    style={{
                      clipPath:
                        'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
                    }}
                  />
                </div>
              </div>

              {/* Floating Animation Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-lg opacity-20"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '2024', label: 'Graduado em ADS' },
              { number: '2026', label: 'Pós-graduação' },
              { number: '100%', label: 'Dedicação' },
              { number: 'UI/UX', label: 'Especialidade' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
