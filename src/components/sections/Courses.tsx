import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BookOpen, Award, Eye, ExternalLink, CheckCircle } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  platform: string;
  category: 'frontend' | 'backend' | 'design' | 'data' | 'tools';
  certificateImage?: string;
  completedYear: string;
  skills: string[];
}

export const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses: Course[] = [
    {
      id: 'python',
      name: 'Python - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'backend',
      completedYear: '2023',
      skills: ['Python', 'Algoritmos', 'Estruturas de Dados'],
    },
    {
      id: 'javascript',
      name: 'JavaScript - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'frontend',
      completedYear: '2022',
      skills: ['JavaScript', 'DOM', 'ES6+'],
    },
    {
      id: 'html-css',
      name: 'HTML5 e CSS3 - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'frontend',
      completedYear: '2022',
      skills: ['HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      id: 'react',
      name: 'React.js - Udemy',
      platform: 'Udemy',
      category: 'frontend',
      completedYear: '2023',
      skills: ['React', 'Hooks', 'Context API'],
    },
    {
      id: 'typescript',
      name: 'TypeScript - Rocketseat',
      platform: 'Rocketseat',
      category: 'frontend',
      completedYear: '2023',
      skills: ['TypeScript', 'Tipos', 'Interfaces'],
    },
    {
      id: 'nodejs',
      name: 'Node.js - Rocketseat',
      platform: 'Rocketseat',
      category: 'backend',
      completedYear: '2024',
      skills: ['Node.js', 'Express', 'APIs'],
    },
    {
      id: 'git',
      name: 'Git e GitHub - Digital Innovation One',
      platform: 'Digital Innovation One',
      category: 'tools',
      completedYear: '2022',
      skills: ['Git', 'GitHub', 'Versionamento'],
    },
    {
      id: 'mysql',
      name: 'MySQL - Curso em Vídeo',
      platform: 'Curso em Vídeo',
      category: 'backend',
      completedYear: '2023',
      skills: ['MySQL', 'SQL', 'Banco de Dados'],
    },
    {
      id: 'docker',
      name: 'Docker - Alura',
      platform: 'Alura',
      category: 'tools',
      completedYear: '2024',
      skills: ['Docker', 'Containers', 'DevOps'],
    },
    {
      id: 'uiux',
      name: 'UI/UX Design - Google',
      platform: 'Google',
      category: 'design',
      completedYear: '2023',
      skills: ['UI Design', 'UX Research', 'Figma'],
    },
    {
      id: 'ml',
      name: 'Machine Learning - Coursera',
      platform: 'Coursera',
      category: 'data',
      completedYear: '2024',
      skills: ['Machine Learning', 'Python', 'Scikit-learn'],
    },
    {
      id: 'agile',
      name: 'Agile e Scrum - Udemy',
      platform: 'Udemy',
      category: 'tools',
      completedYear: '2023',
      skills: ['Scrum', 'Agile', 'Metodologias'],
    },
  ];

  const categoryConfig = {
    frontend: { color: 'from-aqua-green to-baby-blue', icon: '⚛️', label: 'Frontend' },
    backend: { color: 'from-forest-green to-aqua-green', icon: '⚙️', label: 'Backend' },
    design: { color: 'from-gold to-yellow-400', icon: '🎨', label: 'Design' },
    data: { color: 'from-purple-500 to-pink-500', icon: '🧠', label: 'Data Science' },
    tools: { color: 'from-gray-600 to-gray-800', icon: '🛠️', label: 'Ferramentas' },
  };

  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

  return (
    <section id="courses" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-aqua-green rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
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
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
            {t('courses.title')}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {t('courses.description')}
          </p>

          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Courses List */}
          <div className="lg:col-span-2 space-y-4">
            {categories.map(category => {
              const categoryCourses = courses.filter(course => course.category === category);
              const config = categoryConfig[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: categories.indexOf(category) * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{config.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      {config.label}
                    </h3>
                    <div className={`h-px flex-1 bg-gradient-to-r ${config.color} opacity-50`} />
                  </div>

                  {/* Category Courses */}
                  <div className="grid gap-3">
                    {categoryCourses.map((course, index) => (
                      <motion.button
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className={`group p-4 rounded-xl transition-all duration-300 text-left w-full ${
                          selectedCourse?.id === course.id
                            ? 'glass-card bg-white/20 dark:bg-black/30 shadow-glow border-2 border-aqua-green'
                            : 'glass-card hover:bg-white/10 dark:hover:bg-black/20'
                        }`}
                        whileHover={{ scale: 1.02, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500" />
                              <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-aqua-green transition-colors">
                                  {course.name}
                                </h4>
                                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                  <span>{course.platform}</span>
                                  <span>•</span>
                                  <span>{course.completedYear}</span>
                                </div>
                              </div>
                            </div>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {course.skills.slice(0, 3).map(skill => (
                                <span
                                  key={skill}
                                  className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${config.color} text-white opacity-80`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Eye className="w-4 h-4 text-gray-400 group-hover:text-aqua-green transition-colors" />
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-aqua-green transition-colors" />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certificate Preview */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="glass-card rounded-2xl p-6 h-96">
                <AnimatePresence mode="wait">
                  {selectedCourse ? (
                    <motion.div
                      key={selectedCourse.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col"
                    >
                      {/* Certificate Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <Award className="w-6 h-6 text-gold" />
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
                          Certificado
                        </h3>
                      </div>

                      {/* Certificate Preview */}
                      <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                        {selectedCourse.certificateImage ? (
                          <img
                            src={selectedCourse.certificateImage}
                            alt={`Certificado ${selectedCourse.name}`}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        ) : (
                          <div className="text-center space-y-3">
                            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto">
                              <Award className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                Certificado em breve
                              </p>
                              <p className="text-xs text-gray-500">Imagem será adicionada</p>
                            </div>
                          </div>
                        )}

                        {/* Overlay Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-aqua-green/10" />
                      </div>

                      {/* Course Details */}
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {selectedCourse.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedCourse.platform} • {selectedCourse.completedYear}
                          </p>
                        </div>

                        {/* Skills */}
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                            Habilidades adquiridas:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {selectedCourse.skills.map(skill => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-xs bg-aqua-green/10 text-aqua-green rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center text-center space-y-4"
                    >
                      <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                          <BookOpen className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Selecione um curso
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Clique em qualquer curso da lista para visualizar o certificado
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: courses.length.toString(), label: 'Cursos Concluídos' },
              { number: '5', label: 'Plataformas' },
              { number: '2022', label: 'Início dos Estudos' },
              { number: '∞', label: 'Aprendizado Contínuo' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center space-y-2"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
